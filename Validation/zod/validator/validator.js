const z = require("zod");

const loginSchema=z.object({
    email:z.string().trim().email().max(20),
    password:z.string().min(6).max(15)
})


const registerUserSchema=loginSchema.extend({
    name:z.string().trim().min(5,{message:"name must be atleast 3 char long "}).max(20),
    // email:z.string().trim().email().max(20),
    // password:z.string().min(6).max(15)
})

module.exports={loginSchema,registerUserSchema}

