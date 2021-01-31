import path from 'path';
import crypto from 'crypto';
import multer from 'multer';

// SALVANDO LOCALMENTE NA MÁQUINA
const tmpFolder = path.resolve(__dirname, '..', '..', 'uploads');

export default {
  tmpFolder,
  uploadsFolder: path.resolve(tmpFolder, 'uploads'),

  storage: multer.diskStorage({
    destination: tmpFolder,
    filename(request, file, callback) {
      const fileHash = crypto.randomBytes(10).toString('hex'); // aleatory
      const fileName = `${fileHash}-${file.originalname}`; // QUAL NOME QUE ESSE ARQUIVO VAI RECEBER
      return callback(null, fileName);
    },
  }),
};