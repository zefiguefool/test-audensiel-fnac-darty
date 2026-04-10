"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const app = (0, express_1.default)();
const port = 3000;
app.get('/', (req, res) => {
    res.send("Bienvenue en l'an 3000 ! Vous pouvez détacher votre ceinture.");
});
app.listen(port, (error) => {
    if (error) {
        return console.error(error);
    }
    return console.log(`server is listening on ${port}`);
});
