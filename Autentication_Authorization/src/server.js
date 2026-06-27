import app from "./app.js";
import connectDB from "./config/database.js";

connectDB();
 
app.listen(8080,()=>{
    console.log("Server is running on port 8080");
})