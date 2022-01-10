const express = require('express');
const cors = require('cors');

const app = express();



app.use(cors());
app.use(express.json());

const {getHouses, deleteHouses, createHouse, updateHouse} = require('./controller')

app.get("/api/houses", getHouses);
app.delete('/api/houses/:id', deleteHouses);
app.post('/api/houses', createHouse);
app.put('/api/houses/:id', updateHouse);

app.listen(4004, () => {
    console.log("Server is up on port 4004");
});