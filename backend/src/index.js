const express = require('express')
const cors = require('cors')

require('dotenv').config()

const routes  = require('./routes/api')

const app = express()

if(!process.env.ALLOW_CORS)
{
    app.use(cors({
        origin: process.env.WEBSITE_CORS
    }))
}

app.use(cors())
app.use(express.json())
app.use(routes)

app.listen(process.env.PORT || 3333, () => {
    console.log(`Service running`);
})