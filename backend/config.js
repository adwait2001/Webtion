import dotenv from 'dotenv'

dotenv.config();

export default{
    MONGODB_URL:process.env.MONGODB_URI||'mongodb://localhost/webtion',
    JWT_SECRET:process.env.JWT_SECRET||'upcomingwebtion',
    PORT:process.env.PORT || 5000,
}