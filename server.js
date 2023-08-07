const express = require('express');
const routes = require('./routes');
const sequelize = require('./config/connections.js');

const app = express();
const PORT = process.env.port || 3001;

app.user(express.json());
app.user(express.urlencoded({ extended: true }));

app.user(routes);

sequelize.sync({ force: true }).then(() => {
    app.listen(PORT, () => {
        console.log("listening")
    })
})
