import express from "express"
import cors from "cors"

const app = express()
app.use(express.json())
app.use(cors())


const dogs = [
    {
    name: "Paco",
    breed: "Chihuahua",
    age: 34
    },
    {
        name: "Paco",
        breed: "Chihuahua",
        age: 34
        },
    {
        name: "Buba",
        breed: "Labrador",
        age: 34
        },
    {
        name: "Lucia",
        breed: "Yorkie",
        age: 34
        },
    {
        name: "Paco",
        breed: "Yorkie",
        age: 34
        },
]

app.get("/", (req, res) => {
    res.send("Hello World!")
    }
)

app.listen(4000,()=> {
    console.log("API running on port 3000 😂")
})