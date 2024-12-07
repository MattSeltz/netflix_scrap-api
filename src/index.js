import express from "express"
import cors from "cors"

//db
import { db } from "./db/db.js"

//.env
import { PORT } from "./configs/configs.js"

//routes
import moviesRoutes from "./routes/movies.js"

const app = express()

app.use(express.json())
app.use(cors())

await db()

app.get("/", (req, res) => res.send(`<h1>NETFLIX SCRAP</h1>`))

app.use("/movies", moviesRoutes)

app.listen(PORT, () => console.log(`Servidor corriendo en el puerto ${PORT}`))