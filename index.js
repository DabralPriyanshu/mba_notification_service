const express = require("express");
const { PORT } = require("./src/config/env.config");
const connectDB = require("./src/config/db.config");
const mailerCron = require("./src/crons/cron");
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
const ticketRoutes = require("./src/routes/ticket.routes");
ticketRoutes(app);
app.listen(PORT, async () => {
  await connectDB();
  console.log(`Server started at port ${PORT}`);
  mailerCron();
});
