
const mongoose= require('mongoose')
mongoose.set('strictQuery', false);
const connectDB = async()=>{
  try{
 const conx = await mongoose.connect(process.env.URL_DB)
  console.log(`MongoDB connected:${conx.connection.host}`.bgYellow.underline)
} 
  catch(error){
    console.log(error);
    process.exit(1)

  }
}
module.exports = connectDB