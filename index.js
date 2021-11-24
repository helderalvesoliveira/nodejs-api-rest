const express = require("express");
const app = express();
const http = require("http").Server(app);

app.use(express.json());
app.use(express.urlencoded({
  extended: true
}));


const authRoutes = require("./routes/auth");
app.use("/auth", authRoutes);
app.get("/", (req, res, next) => {
    return res.status(200).json({ result: true, message: "NodeJS API REST Works!!" });
  });
app.use((req, res, next) => {
    const error = new Error("Not found");
    error.status = 404;
    next(error);
  });
  
  app.use((error, req, res, next) => {
    res.status(error.status || 500);
    res.json({ error: { message: error.message } });
  });

  



http.listen(3100, () => {
  console.log(`Listening on port 3100`);
});

