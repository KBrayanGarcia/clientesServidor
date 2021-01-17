const express = require('express');
require('dotenv').config({ path: 'variables.env' })
const bodyParser = require('body-parser');
const cors = require('cors');

const clientesRoutes = require('./routes/clientes');
const authRoutes = require('./routes/auth');



const app = express();

app.use(cors());

app.use(bodyParser.json());

app.use('/clientes',clientesRoutes());
app.use('/auth',authRoutes());



const host = process.env.HOST || '0.0.0.0';
const port = process.env.PORT || 4000
app.listen(port, host, () => {
    console.log('el servidor esta funcionado');
}); 