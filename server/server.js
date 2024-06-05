import express from 'express'
import multer from 'multer';

const app = express()

const storage = multer.memoryStorage()
const upload = multer({storage:storage})

// app.use(upload.single('file'))

app.post('/tojson',upload.single('file'),(req,res)=>{
    if(req.file){
        console.log(req.file.originalname);
        return
    }
});
// app.post('/tocsv',(req,res)=>{

// });

app.listen(3000,()=>{
    console.log(`Server Running`);
})