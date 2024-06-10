import express from "express";
import userRoute from "./routes/user.route.js";
import loginRoute from "./routes/login.route.js";
import apiRoute from "./routes/api.route.js";

const app = express();

app.use(express.static("public"));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/", userRoute);
app.use("/", loginRoute);
app.use("/api/v1/products", apiRoute);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`http://localhost:${PORT}`);
});
