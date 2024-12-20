import express, {Request, Response} from "express";
import path from "path";
import https from "https";
import fs from "fs";
import Mongobase from "./mongo/Mongobase";
import passport from "passport";
import session from "express-session";
import {authRouter} from "./routers/AuthRouter";
import Utils from "fv-shared/Utils";
import initializePassport from "./PassportConfig";

import dotenv from "dotenv";
dotenv.config();

Mongobase.connect()
	.then(() => console.log("Connected to mongodb"))
	.catch((err) => console.error(`Failed to connect to mongodb: ${err}`));

const app = express();

const sslKeyPath = process.env.SSL_KEY_ABSOLUTE_PATH!;
const sslCertPath = process.env.SSL_CERT_ABSOLUTE_PATH!;
const options = {
	key: fs.readFileSync(path.resolve(sslKeyPath), "utf-8"),
	cert: fs.readFileSync(path.resolve(sslCertPath), "utf-8")
}

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, "client")));
app.use(session({
	secret: process.env.EXPRESS_SESSION_SECRET || Utils.generateString(Utils.ALPHANUMERIC, 20),
	resave: false,
	saveUninitialized: false
}));
app.use(passport.initialize());
app.use(passport.session());
app.use(passport.authenticate("session"));

initializePassport();
app.use("/auth", authRouter);

app.get("/*", (_req: Request, res: Response) => res.sendFile(path.resolve("./client/index.html")));


const port = parseInt(process.env.EXPRESS_SERVER_PORT as string, 10) || 443;
https.createServer(options, app).listen(port, () => console.log(`Listening on port ${port}`));