import dotenv from 'dotenv'

dotenv.config();

export default{
    MONGODB_URL:"mongodb+srv://adwait:adwait@cluster0.fprqi.mongodb.net/adwait?retryWrites=true&w=majority" ||'mongodb://localhost/webtion',
    JWT_SECRET:process.env.JWT_SECRET||'upcomingwebtion',
    PORT:process.env.PORT || 5000,
}