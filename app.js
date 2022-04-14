require ("dotenv").config()

const express = require("express")
const cors = require("cors")
const dbConnect = require("./config/mongo")
const app = express()

app.use(cors());
app.use(express.json());
app.use(express.static("storage"));

const port = process.env.port || 3000

// calling routes here
// e.g. localhost/api/{route}
app.use("/api", require("./routes"));

app.listen(port, () => {
  console.log("App running on http://localhost:" + port)
})

dbConnect();