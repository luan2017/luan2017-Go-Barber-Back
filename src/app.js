import express from 'express';
import routes from './routes';

class App {
  constructor() {
    this.server = express();

    // chamando meus métodos
    this.middlewares();
    this.routes();
  }

  middlewares() { // Registrando meus middlewares
    this.server.use(express.json());
  }

  routes() { // Registrando minhas rotas
    this.server.use(routes);
  }
}

export default new App().server;
