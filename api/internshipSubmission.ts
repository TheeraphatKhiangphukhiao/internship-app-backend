import express from "express";
import { queryAsync } from "../dbconn";
import mysql from "mysql";
import { InternshipSubmissionRequest } from "../model/internshipSubmissionModel";
import nodemailer from "nodemailer";


export const router = express.Router();



router.post('/', async (req, res) => {

    let internshipSubmission: InternshipSubmissionRequest = req.body;
    console.log(internshipSubmission);

    let sql = "insert into `register_for_intern` (`name`, `email`, `mobile`, `nickname`, `address`, `date_of_birth`, `blood_type`, `line_id`, `university`, `qualification`, `major`, `gpa`, `resume`) values (?,?,?,?,?,?,?,?,?,?,?,?,?)";
    sql = mysql.format(sql, [
        internshipSubmission.name,
        internshipSubmission.email,
        internshipSubmission.mobile,
        internshipSubmission.nickname,
        internshipSubmission.address,
        internshipSubmission.date_of_birth,
        internshipSubmission.blood_type,
        internshipSubmission.line_id,
        internshipSubmission.university,
        internshipSubmission.qualification,
        internshipSubmission.major,
        internshipSubmission.gpa,
        internshipSubmission.resume,
    ]);

    let result: any = await queryAsync(sql);
    res.status(201).json({ affected_row: result.insertId });
});



router.post('/send/email', async (req, res) => {
    
    const email = req.body;
    
    const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: "zerostar02yi@gmail.com",
            pass: "ifol cpoj zlts vnsm"
        }
    });

    const mailOptions = {
        from: "zerostar02yi@gmail.com",
        to: email.email,
        subject: "INTERNSHIP PROGRAM",
        text: `เรียนคุณ ${email.name}

        จากบริษัท aaa ตอนนี้ทางบริษัทได้รับ application เรียบร้อยเเล้ว

        ขอบคุณ ครับ/ค่ะ
        `
    };

    try {
        const info = await transporter.sendMail(mailOptions);
        res.status(201).json({ info: info.response });
    } catch (error) {
        res.status(201).json({ info: "error" });
    }

});

