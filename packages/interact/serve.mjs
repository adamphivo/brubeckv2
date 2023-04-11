import express from 'express';
import * as dotenv from 'dotenv' // see https://github.com/motdotla/dotenv#how-do-i-use-dotenv-with-import
dotenv.config()
import { join } from 'path';

const app = express();

app.use(express.static(join(process.cwd(), 'packages/interact/dist')));

app.get('*', (req, res) => {
  res.sendFile(join(process.cwd(), 'packages/interact/dist', 'index.html'));
});

const port = process.env.INTERACT_PORT || 3000;

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});