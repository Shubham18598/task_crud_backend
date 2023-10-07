const mongoose = require("mongoose");
mongoose.set("strictQuery", false)

mongoose.connect('mongodb+srv://muddamwarshubham98:s@cluster0.pah3tcf.mongodb.net/task' , 
{useNewUrlParser:true}).then(() => console.log("db connected")).catch((error) => console.log(error));