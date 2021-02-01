import dotenv from 'dotenv';
import path from 'path';

dotenv.config();
import './src/database';
import express from 'express';
import homeRoutes from './src/routes/home.routes';
import userRoutes from './src/routes/user.routes';
import tokenRoutes from './src/routes/token.routes';
import alunoRoutes from './src/routes/aluno.routes';
import photoRoutes from './src/routes/photos.routes';

class App {
  // iniciar o contructor
  constructor() {
    this.app = express();
    this.middlewares();
    this.routes();
  }

  middlewares() {
    this.app.use(express.urlencoded({ extended: true }));
    this.app.use(express.json());
    this.app.use('/uploads', express.static(path.join(__dirname, 'uploads')));
  }

  routes() {
    this.app.use('/', homeRoutes);
    this.app.use('/users', userRoutes);
    this.app.use('/tokens', tokenRoutes);
    this.app.use('/alunos', alunoRoutes);
    this.app.use('/photos', photoRoutes);
  }
}

export default new App().app; // class ja estanciada //server.js
