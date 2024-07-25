import express from 'express';
import blogRouter from './routes/blog.js';

const server = express();

server.listen(8000);

server.set('view engine', 'ejs');
server.set('views', './views');

server.use(express.static('./public'));

server.use('/blog', blogRouter); 