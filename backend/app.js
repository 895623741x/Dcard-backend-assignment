const express = require("express");
const rateLimit = require("express-rate-limit");
const app = express();
const port = 3000;
const limiter = rateLimit({
	windowMs: 60 * 60 * 1000, // 60 minutes
	max: 1000, // limit each IP to 100 requests per windowMs
	message: `too many requests, please wait ${this.windowMs} minutes for your next request`,
});

app.get("/", limiter, (req, res) => {
	res.send("hello world");
});
app.listen(port, () => console.log(`example app listening on port ${port}!`));
