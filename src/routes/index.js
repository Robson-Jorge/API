const { Router } = require("express");

const userRouter = require("./users.routes");
const notesRouter = require("./notes.routes");
const tagsRouter = require("./tags.routes");
const sessionsRouter = require("./sessions.routes");

const routes = Router();

routes.use("/sessions", sessionsRouter);
routes.use("/notes", notesRouter);
routes.use("/users", userRouter);
routes.use("/tags", tagsRouter);

routes.use("/ping", (req, res) => res.json({ pong: true }));

module.exports = routes;