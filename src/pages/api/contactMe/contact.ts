// import type { NextApiRequest, NextApiResponse } from "next";
// import * as nodemailer from "nodemailer";

// export default async function handler(
//   req: NextApiRequest,
//   res: NextApiResponse
// ) {
//   const { name, email, message } = req.body;

//   const transporter = nodemailer.createTransport({
//     service: "gmail",
//     auth: {
//       user: process.env.NEXT_PUBLIC_GMAIL_EMAIL,
//       pass: process.env.NEXT_PUBLIC_GMAIL_PASSWORD,
//     },
//     secure: false,
//   });

//   const mailOptions = {
//     from: email,
//     to: process.env.NEXT_PUBLIC_GMAIL_EMAIL,
//     subject: `Message from ${name}`,
//     text: `${message} | Sent from: ${email}`,
//     html: `<div>${message}</div><p>Sent from: ${email}</p>`,
//   };

//   try {
//     await transporter.sendMail(mailOptions);
//     console.log("Email sent successfully");
//     res.status(200).send("success");
//   } catch (error) {
//     console.error("Error sending email", error);
//     res.status(500).send("error" + JSON.stringify(error));
//   }
// }
