import multer from "multer";
import path from "path";
import nc from "next-connect";
import { json } from "express";

export default function handler(req, res) {
    var nodeMailer = require('nodemailer');
    const fs = require('fs');
    const express = require('express')
    const app = express()

    app.use(express.json())

    const transporter = nodeMailer.createTransport({
        port: 465,
        host: "smtp.gmail.com",
        auth: {
            user: 'testsmtpnonstop@gmail.com',
            pass: 'gizlqqvuumqnsfsx',
        },
        secure: true,
    });


    // let storage = multer.diskStorage({
    //     destination: function (req, file, cb) {
    //         cb(null, "public/uploads");
    //     },
    //     filename: function (req, file, cb) {
    //         cb(
    //             null,
    //             file.originalname
    //         );
    //     },
    // });

    // let upload = multer({
    //     storage: storage,
    // });

    // let uploadFile = upload.single("file");
    // handler.use(uploadFile);

    let formDataObject = JSON.parse(req.body);
    var message = {
        sender: "adityaj.nonstop@gmail.com",
        to: formDataObject.useremail,
        subject: 'New lead from bayswaterdentist.com.au',
        html: `<div>
        <p>Name: ${formDataObject.username}</p>
        <p>Email: ${formDataObject.useremail}</p>
        <p>Phone: ${formDataObject.userphone}</p>
        <p>Meassge: ${formDataObject.message}</p>
        </div>`,
        // attachments: [{ 'filename': req.file.filename, 'content': data }]
    };

     console.log(message)

    transporter.sendMail(message), function (err, success) {
        console.log(success);
        if (err) {
            console.log(err);
        }

     }



    // console.log(req.body)
    // res.send('success')
}