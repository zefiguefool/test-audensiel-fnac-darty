import express, { Request, Response } from 'express';
import { server } from 'typescript';

const app: express.Application = express();
const port: number = 3000;

app.get('/', (req: Request, res: Response): void => {
    res.send("Bienvenue en l'an 3000 ! Vous pouvez détacher votre ceinture.");
});
app.listen(port, (error?: Error) => {
  if (error) {
    return console.error(error);
  }
  return console.log(`server is listening on ${port}`);
});


