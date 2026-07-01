import dotenv from 'dotenv';
import app from './app.js';
import connect from './config/db.js';

dotenv.config();

const port = process.env.PORT;
const uri = process.env.MONGODB;

(async () => {
  try {
    await connect(uri);
    app.listen(port, () => console.log(`API ouvindo em http://localhost:${port}`));
  } catch (error) {
    console.error('Erro ao conectar no banco ou iniciar o servidor', error);
    process.exit(1);
  }
})();