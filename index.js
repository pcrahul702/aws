const AWS=require("aws-sdk");
require('dotenv').config();
const bucket_name="rahul-kr-02-01-2002"

console.log(process.env.KEY)
console.log(process.env.SECRET_KEY);
const KEY="AKIASCSJ7SHABORTW27O"
const SECRET_KEY="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"

const s3=new AWS.S3({
    accessKeyId:KEY,
    secretAccessKey:SECRET_KEY
})

const params={
    Bucket:bucket_name
}
s3.createBucket(params,(err,data)=>{
    if(err) console.log(err)
    else console.log("buket is created")
})
