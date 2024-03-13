const AWS = require("aws-sdk");
const KEY = "";
const SECRET_KEY = "";

const ses = new AWS.SES({
  accessKeyId: KEY,
  secretAccessKey: SECRET_KEY,
  region:"us-east-1"
});
let sendEmail = (emails, name) => {
  const params = {
    Source: "devdeveloper330@gmail.com",
    Destination: {
      ToAddresses: emails,
    },
    Message: {
      Body: {
        Html: {
          Charset: "UTF-8",
          Data: "this is body from email!",
        },
       
      },
      Subject: {
        Charset: "UTF-8",
        Data: `Hello From ${name}`,
      },
    },
  };
  ses.sendEmail(params, (err, data) => {
    if (err) console.log(err);
    else console.log("emailSent");
  });
};
sendEmail(["pcrahul702@gmail.com"],"Rahul")
