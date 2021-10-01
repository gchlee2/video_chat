import http from "http";
import SocketIO from "socket.io";
import express from "express";

const app = express();

app.set("view engine", "pug");
app.set("views", __dirname + "/views");
app.use("/public", express.static(__dirname + "/public"));
app.get("/", (_, res) => res.render("home"));
app.get("/*", (_, res) => res.redirect("/"));

const httpServer = http.createServer(app);
const wsServer = SocketIO(httpServer);

console.log(process.env.PORT);
const handleListen = () => console.log(`Listening on http://localhost:3000  or https://plecon.herokuapp.com/`);
httpServer.listen(process.env.PORT || 3000, handleListen);