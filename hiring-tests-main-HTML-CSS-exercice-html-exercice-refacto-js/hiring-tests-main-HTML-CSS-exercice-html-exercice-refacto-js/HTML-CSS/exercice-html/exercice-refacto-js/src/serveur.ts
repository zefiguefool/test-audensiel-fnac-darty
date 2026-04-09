import express, { Request, Response } from 'express';

const app: express.Application = express();
const port: number = 3000;

app.get('/', (req: Request, res: Response): void => {
    res.send('The sedulous hyena ate the antelope!');
});
app.listen(port, (error?: Error) => {
  if (error) {
    return console.error(error);
  }
  return console.log(`server is listening on ${port}`);
});