const mongoose = require("mongoose");
mongoose.set("strict", false); // Disable strict mode

mongoose
  .connect('mongodb+srv://muddamwarshubham98:s@cluster0.pah3tcf.mongodb.net/task', {
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
  .then(() => console.log("db connected"))
  .catch((error) => console.error("Database connection error:", error));
