const express = require("express");

const app = express();

const shelterRoutes = require("./routes/shleters");
const dogRoutes = require("./routes/dogs");
const adminRoutes = require("./routes/admin");

const port = 3000;

app.use((req, res, next) => {
  if (req.query.isAdmin) {
    next();
  }
  res.send("NOT AN ADMIN");
});

app.use("/shelters", shelterRoutes);

app.use("/dogs", dogRoutes);

app.use("/admin", adminRoutes);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
