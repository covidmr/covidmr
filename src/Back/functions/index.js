const functions = require('firebase-functions');

// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
// exports.helloWorld = functions.https.onRequest((request, response) => {
//  response.send("Hello from Firebase!");
// });

//const express = require('express');

let express = require("express"),
  path = require('path'),
  nodemailer = require('nodemailer'),
  bodyParser = require('body-parser');

const app = express();
const mailer = require('./mailer')
const cors = require('cors')({origin: true});
app.use(cors);


app.get('/', (req, res) => {
    const date = new Date();
    const hours = (date.getHours() % 12) + 1;  // London is UTC + 1hr;
    res.send(`
      <!doctype html>
      <head>
        <title>Time</title>
        <link rel="stylesheet" href="/style.css">
        <script src="/script.js"></script>
      </head>
      <body>
        <p>In London, the clock strikes:
          <span id="bongs">${'BONG '.repeat(hours)}</span></p>
        <button onClick="refresh(this)">Refresh</button>
      </body>
    </html>`);
  });
  
app.get('/api', (req, res) => {
    const date = new Date();
    const hours = (date.getHours() % 12) + 1;  // London is UTC + 1hr;
    res.json({bongs: 'BONG '.repeat(hours)});
});

app.get('/tox', (req, res) => {
    res.json({hey: 'Hoo '});
});

app.post('/send_email', (req,res) => {
    const data = req.body;
  
  const smtpTransport = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.REACT_APP_MAIL_USER,
      pass: process.env.REACT_APP_MAIL_PASS
    }
  });
  
  const mailOptions = data.reportedAddress ? {
    from: data.email,
    to: 'covid19mr@gmail.com',
    subject: 'Je signale un cas suspect',
    html: `<p>Email: ${data.email}</p>
            <p>Nom et Prénom: ${data.name}</p>
            <p>Téléphone: ${data.telephone}</p>
            <p>Adresse: ${data.address}</p>
            <p>L'adresse de la personne suspectée: ${data.reportedAddress}</p>
            <p>Message: ${data.message}</p>`
  } : 
  {
    from: data.email,
    to: 'covid19mr@gmail.com',
    subject: 'Je me signale',
    html: `<p>Email: ${data.email}</p>
            <p>Nom et Prénom: ${data.name}</p>
            <p>Téléphone: ${data.telephone}</p>
            <p>Adresse: ${data.address}</p>
            <p>Message: ${data.message}</p>`
  };
  
  smtpTransport.sendMail(mailOptions,
  (error, response) => {
    if(error) {
      res.send(error)
    }else {
      res.send('Success')
    }
    smtpTransport.close();
  });
  
});

exports.app = functions.https.onRequest(app);

