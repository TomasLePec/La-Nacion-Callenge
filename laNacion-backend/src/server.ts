import App from './app';
import IndexRoute from './routes/index.route';
import ProductRoute from './routes/product.route';

export const app = new App([new IndexRoute(), new ProductRoute()]);

app.listen();
