const express = require('express');
const cors = require('cors');
const router = require('./routers/AccesoRouter');
const routes=require('./routers/UsuarioRouter')
const route=require("./routers/RolesRouter")

const PORT = 9000;
const app = express();

app.use(express.json());
app.use(cors());

app.use('/api', router);
app.use('/hl',routes)
app.use("/Api",route)

app.listen(PORT, () => {
    console.log('Servidor ejecutándose correctamente en el puerto ' + PORT);
});