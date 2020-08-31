import AppServer from "./server";

const server = new AppServer()
const port: any = process.env.PORT || 8080;
server.start(port);