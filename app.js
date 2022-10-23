const express = require("express");
const app = express();
const chalk = require("chalk");

// request headers
app.get("/headers", (req, res, next) => {
    const headers = req.headers;
    console.log(chalk.yellowBright("request headers: "), headers);
    res.send(headers)
    next();
});

// request params
app.get("/params/:id", (req, res, next) => {
    const params = req.params;
    console.log(chalk.yellowBright("request params: "), params);
    res.send(params)
    next();
});

// request query params
app.get("/query", (req, res, next) => {
    const query = req.query;
    console.log(chalk.yellowBright("request query params: "), query);
    res.send(query)
    next();
});

// request body
app.get(express.json());
app.get("/body", (req, res, next) => {
    const body = req.body;
    console.log(chalk.yellowBright("request body: "), body);
    res.json(body)
    next();
});

// request custom user
app.get("/custom", (req, res) => {
    req.user = { name: "Eliran", _id: 32531865 };
    console.log(chalk.yellowBright("request custom user: "), req.user);
    res.send(req.user)
});

const PORT = process.env.PORT || 8181;
app.listen(PORT, () => console.log(chalk.blueBright(`Listening on: http://localhost:${PORT}`)));
