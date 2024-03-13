const AWS = require("aws-sdk");
const bucket_name = "rahul-kr-02-01-2002";
const fs = require("fs");
const KEY = "AKIASCSJ7SHABORTW27O";
const SECRET_KEY = "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";

const s3 = new AWS.S3({
  accessKeyId: KEY,
  secretAccessKey: SECRET_KEY,
});

const uploadFile = (filename) => {
  const filecontent = fs.readFileSync(filename);
  const params = {
    Bucket:bucket_name,
    Key:"index.js",
    Body:filecontent,
  };
  s3.upload(params,(err,data)=>{
    if(err) console.log(err);
    else console.log("uploaded")
  })
};

uploadFile("./index.js")