const express = require("express");
const fs = require("fs");
const app = express();

const logginMiddleware = (req, res, next) => {
    const logMessage = `URL: ${req.url} hit at time: ${new Date()}\n`;
    console.log(logMessage);
    
    fs.appendFile("server.log", logMessage, (err) => {
        if (err) {
            console.error("Failed to write to log file:", err);
        }
    });

    next();
}

app.use(logginMiddleware);

app.get("/api/v1/login", (req, res) => {
    res.json({
        success: true,
        message: "its a dummy data fetching api"
    });
});

app.listen(8080, () => {
    console.log("Your node app is running on port 8080");
});
