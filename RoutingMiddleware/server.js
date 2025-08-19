import express, { json, Router } from "express";
const app = express();
const PORT = 3000;


app.use((req, res, next) => {
  console.log(`[${new Date().toISOString()}] ${req.method} ${req.url}`);
  next();
});

app.use(json());

app.get("/", (req, res) => {
  res.send("Hello World");
});

app.get("/about", (req, res) => {
  res.send("This is the About page.");
});

app.get("/contact", (req, res) => {
  res.send("This is the Contact page.");
});

app.get("/user/:id", (req, res) => {
  res.send(`User ID: ${req.params.id}`);
});

app.get("/search", (req, res) => {
  const { name } = req.query;
  if (name) {
    res.send(`You searched for ${name}`);
  } else {
    res.send("Please provide a name query parameter, e.g. /search?name=John");
  }
});

const userRouter = Router();

userRouter.use((req, res, next) => {
  console.log("Router-level middleware executed.");
  next();
});

userRouter.get("/", (req, res) => {
  res.send("List of users");
});

userRouter.post("/", (req, res) => {
  res.send(`New user created with data: ${JSON.stringify(req.body)}`);
});


app.use("/api/users", userRouter);

app.use((err, req, res, next) => {
  console.error("Error caught:", err.message);
  res.status(500).json({ error: err.message });
});

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
