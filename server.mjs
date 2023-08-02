import express from 'express';
import path from 'path';
const __dirname = path.resolve();
import authRouter from './routes/auth.mjs'
import postRouter from './routes/post.mjs'




const app = express();
app.use(express.json()); // body parser
// app.use(cors())



app.use("/api/v1", authRouter)

app.use((req, res, next) => { // JWT
    let token = "valid"
    if (token === "valid") {
        next();
    } else {
        res.send({ message: "invalid token" })
    }
})


app.use("/api/v1", postRouter)




app.use(express.static(path.join(__dirname, 'public')))

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
    console.log(`Example server listening on port ${PORT}`)
})