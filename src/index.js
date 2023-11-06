const express = require('express');

const app = express()
const PORT = 3001;

app.listen(PORT, () => {
    console.log(`La app está corriendo en https://localhost:${PORT}`)
})