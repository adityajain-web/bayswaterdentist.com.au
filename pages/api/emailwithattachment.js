import multer from "multer";
import path from "path";
import nc from "next-connect";

var nodeMailer = require('nodemailer');
const fs = require('fs');

let transporter = nodeMailer.createTransport({
  host: 'smtp.gmail.com',
  port: 465,
  secure: true,
  auth: {
      user: 'testsmtpnonstop@gmail.com',
      pass: 'gizlqqvuumqnsfsx'
  }
});


export const config = {
   api: {
    bodyParser: false,
   },
 };

const handler = nc();

let storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "/public/uploads");
  },
  filename: function (req, file, cb) {
    cb(
      null,
      file.originalname 
    );
  },
});

let upload = multer({
  storage: storage,
});

let uploadFile = upload.single("file");
handler.use(uploadFile);

handler.post(async (req, res) => {
  fs.readFile(req.file.path, function (err, data) {
    // console.log("req.file", req.file);
    // console.log("req.body", req.body.mail.useremail);
    let formDataObject = JSON.parse(req.body.mail);
    // console.log("req.body", formDataObject.useremail);
   var message = {   
    sender: "adityaj.nonstop@gmail.com",    
    to:formDataObject.useremail,   
    subject: 'New lead from bayswaterdentist.com.au',    
    html: `<div>
    <p>Name: ${formDataObject.username}</p>
    <p>Email: ${formDataObject.useremail}</p>
    <p>Phone: ${formDataObject.userphone}</p>
    <p>Meassge: ${formDataObject.message}</p>
    </div>`,  
    attachments: [{'filename': req.file.filename, 'content': data}]
};

transporter.sendMail(message), function(err, success) {
      console.log(success);
        if (err) {
            console.log(err);
        }

    }
}); 
  res.status(200).end(JSON.stringify({ message:'Send Mail' }))
});

export default handler;
