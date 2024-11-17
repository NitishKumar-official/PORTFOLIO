const mongoose = require("mongoose");
const initdata = require("./data.js");
const ListProj = require("../models/project.js");

const MONGO_url = "mongodb://localhost:27017/portfolio";

main()
.then(()=>{
    console.log("connected to database");
})
.catch((err)=>{
    console.log(err);
})

async function main(){
    await mongoose.connect(MONGO_url);
}

const initDB = async () => {
    await ListProj.deleteMany({});
    await ListProj.insertMany(initdata.data);
    console.log("data was initialized");
  };
  
  initDB();
