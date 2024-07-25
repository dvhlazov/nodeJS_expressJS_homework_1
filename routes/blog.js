import { Router } from "express";


const router = new Router();

router.get('/about', (req, res) => {
    const title = 'ExpressJS entry level homework';
    const textTitle = 'Here you can see how to use expressJS on servers side, using routers and routes to realise request and results from the server clients requests';
    const imageUrl = '/images/screen1.png' ;
    res.render('index', { title, textTitle, imageUrl  });
});

router.get('/next_article', (req, res) => {
    const title = 'Other one aricle title from database';
    const textTitle = 'Here i created a new url page with express and ejs instrument'; 
    const imageUrl = '/images/screen2.png' ;
    res.render('index', { title, textTitle, imageUrl  });
});

export default router;