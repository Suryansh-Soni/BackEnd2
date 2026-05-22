const mongoose=require('mongoose');
// mongoose.connect("mongodb://localhost:27017/test");
main().then((res)=>{
    console.log("Connected to MongoDB");
}).catch(err => console.log(err));
async function main() {
  await mongoose.connect('mongodb://localhost:27017/test');
  console.log("connected to mongo");
} 

const userSchema=new mongoose.Schema({
    name:String,
    age:Number,
    email:String
})
// making new collection User in database test with userSchema
const User=mongoose.model("User",userSchema);


//insert data in database
const user1=new User({
    name:"John Doe",
    age:30,
    email:"john.doe@example.com"
});
user1.save().then((res)=>{
    console.log("User saved:", res);
}).catch(err => console.log(err));  


// insert many 
User.insertMany([
    {
        name:"Jane Doe",
        age:25,
        email:"jane.doe@example.com"
    },
    {
        name:"Bob Smith",
        age:35,
        email:"bob.smith@example.com"
    }
]).then((res)=>{
    console.log("Users saved:", res);
}).catch(err => console.log(err));