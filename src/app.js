import express from  'express';
import config from './Connection/config';
import cors from "cors";
import routes from "./Connection/Routes/routes";
import morgan from "morgan";
import path from "path"
import engines from "consolidate"

const app = express()
let port;
app.set('port', config.port)


app.use(cors());
app.use(morgan("dev"));
app.use(express.urlencoded({ extended: false })); //Recibir datos desde formularios html
app.use(express.json()); //Usar JSON

app.set('views', __dirname + '\\views');
app.use(express.static(__dirname + '\\public'));
app.engine('html', engines.mustache);
app.set('view engine', 'html');

// Routes
app.use(routes);

export default app;
