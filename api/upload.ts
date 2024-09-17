import express from "express";
import multer from "multer";
import { storage } from "../firebase-config";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage"; // ใช้ฟังก์ชันที่จำเป็นจาก Firebase SDK


export const router = express.Router();


class FileMiddleware {
    filename = "";
    
    public readonly diskLoader = multer({

      storage: multer.memoryStorage(),
      
      limits: {
        fileSize: 67108864, // 64 MByte
      },
    });
}

const fileUpload = new FileMiddleware();


router.post("/", fileUpload.diskLoader.single("file"), async (req, res) => {

    const file = req.file;

    if (!file) {
        res.status(400).json({ downloadURL: "No file uploaded" });
    }

    try {

        if(file) {
            const storageRef = ref(storage, `file/${Date.now()}_${file?.originalname}`);
            
            const snapshost = await uploadBytesResumable(storageRef, file?.buffer);

            const downloadURL = await getDownloadURL(snapshost.ref);
            res.status(200).json({ downloadURL: downloadURL });
        }

    } catch (error) {
        console.error("Error uploading file : ", error);
        res.status(400).json({ downloadURL: "Error uploading file" });
    }

});