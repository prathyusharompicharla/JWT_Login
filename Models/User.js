
const mongoose=require('mongoose')
let mongoXlsx = require('mongo-xlsx');

var excel = require("exceljs");

const User=mongoose.Schema({
    username:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
     role: {
  type: String,
  default: 'basic',
  enum: ["basic",  "admin"]
 },
    createdAt:{
        type:Date,
      default:Date.now()
    }

})


//To store data in excel format

let model = mongoXlsx.buildDynamicModel(User);
mongoXlsx.mongoData2Xlsx(User, model, function (err, res) {
if (err) return err;
console.log(res)
})
module.exports=mongoose.model("user",User)