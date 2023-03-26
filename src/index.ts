import * as dotenv from 'dotenv';
dotenv.config();

import app from './server';

app.listen(3001, () => {
  console.log('listening on http://localhost:3001');
});
