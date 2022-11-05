import express from "express";


const app = express();

const port = 3333
console.log("Server ON");

app.listen(port, () => {
    return console.log(`Express is listening at http://localhost:${port}`);
});

export { app };
