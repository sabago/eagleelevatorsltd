import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

import 'bootstrap/dist/css/bootstrap.min.css';
import '@fortawesome/fontawesome-free/css/all.min.css'; 
import 'bootstrap-css-only/css/bootstrap.min.css'; 
import 'mdbreact/dist/css/mdb.css';
import { BrowserRouter as Router } from 'react-router-dom';


// import 'src/components/services/styles/index.css';
// import 'src/components/contact-us/styles/index.css';

// let express = require('express');
// let router = express.Router();
// let nodemailer = require('nodemailer');
// let cors = require('cors');
// const creds = require('./config');

// let transport = {
//     host: 'smtp.example.com', // Don’t forget to replace with the SMTP host of your provider
//     port: 587,
//     auth: {
//     user: creds.USER,
//     pass: creds.PASS
//   }
// }

// let transporter = nodemailer.createTransport(transport)

// transporter.verify((error: any, success: any) => {
//   if (error) {
//     console.log(error);
//   } else {
//     console.log('Server is ready to take messages');
//   }
// });

// router.post('/send', (req: { body: { name: any; email: any; message: any; }; }, res: { json: (arg0: { status: string; }) => void; }, next: any) => {
//   let name = req.body.name
//   let email = req.body.email
//   let message = req.body.message
//   let content = `name: ${name} \n email: ${email} \n message: ${message} `

//   let mail = {
//     from: name,
//     to: 'RECEIVING_EMAIL_ADDRESS_GOES_HERE',  // Change to email address that you want to receive messages on
//     subject: 'New Message from Contact Form',
//     text: content
//   }

//   transporter.sendMail(mail, (err: any, data: any) => {
//     if (err) {
//       res.json({
//         status: 'fail'
//       })
//     } else {
//       res.json({
//        status: 'success'
//       })
//     }
//   })
// })

// const app = express()
// // app.use(cors())
// // app.use(express.json())
// app.use(express.static(__dirname + '/client/build'))
// app.use('/', router)
// app.listen(3000)

ReactDOM.render(
  <Router basename={process.env.PUBLIC_URL}>
    < App />
  </Router>, 
  // <React.StrictMode>
  //   <App />
  // </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();


