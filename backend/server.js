import express from 'express'
import data from './data'
import config from './config'
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import userModels from './models/userModels'
import userRoutes from './routes/userRoutes'
import productRoutes from './routes/productRoutes'
import orderRoutes from './routes/orderRoutes'
import bodyParser from 'body-parser';
import path from 'path'


const mongodburl = config.MONGODB_URL;
mongoose.connect(mongodburl, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true
}).then(console.log('mongo')).catch(error=>console.log(error.reason))


const app=express();
app.use(bodyParser.json())
app.use('/api/users',userRoutes)
app.use('/api/products',productRoutes)
app.use('/api/orders',orderRoutes)

if (process.env.NODE_ENV === 'production'){
    app.use(express.static(path.join(__dirname, '/../frontend/build')));

    app.get('*', (req, res) => {
        res.sendFile(path.join(`${__dirname}/../frontend/build/index.html`));
      });
}

app.listen(config.PORTgit, () => {
    console.log('server at port')
})