import express from 'express'
import path from 'path'

const app=express()
var __dirname = path.resolve()
app.use(express.static(path.join(__dirname,'build')))

app.get('*', (req, res) => {
res.sendFile(path.join(__dirname, 'build','index.html'));
});

const port=process.env.PORT||8000

app.listen(port,()=>console.log(`listening to port ${port}`))