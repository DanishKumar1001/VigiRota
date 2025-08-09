import express from "express";
import path from "path";
import { fileURLToPath } from "url";

const app = express();
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// EJS Middleware to use as view engine

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

// static files

app.use(express.static(path.join(__dirname, "public")));

//Home

app.get("/", (req, res) => {
  res.render("index", { title: "VigiRota", message: "Welcome to VigiRota!" });
});

//Admin Dashboard

app.get("/admin", (req, res) => {
  res.render("index", { title: "Admin Dashboard"});
});

//Guard Dashboard

// --Profile--

app.get("/guard/profile", (req, res) => {
  res.render("index", { title: "Vigilance Personnel Profile"});
});

// --Roster--

app.get("/guard/rota", (req, res) => {
  res.render("index", { title: "Rota"});
});

//Business's Dashboard

app.get("/rota/rotaPost", (req, res) => {
  res.render("index", { title: "Rota Post"});
});

// server

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running at http://localhost:${PORT}`));
