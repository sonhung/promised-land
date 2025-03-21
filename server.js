const express = require('express');
const next = require('next');
const getAuthAPI = require('./apis/authApi');
const getNewsAPI = require('./apis/newsApi');

const port = parseInt(process.env.PORT, 10) || 8080;
const dev = process.env.NODE_ENV !== 'production';
const host = process.env.HOST || '0.0.0.0';

const app = next({ dev });
const handle = app.getRequestHandler();

const authApi = getAuthAPI();
const newsApi = getNewsAPI();
app
  .prepare()
  .then(() => {
    const server = express();
    server.use(express.urlencoded({ extended: true }));
    server.use(express.json());

    // Routes masking category
    server.get('/category/:type/:location', (req, res) => {
      const actualPage = '/category'
      app.render(req, res, actualPage)
    })

     // Routes masking new detail
     server.get('/news-detail/:id', (req, res) => {
      const actualPage = '/news-detail'
      app.render(req, res, actualPage)
    })

     // Routes masking search page
     server.get('/search-page/:id', (req, res) => {
      const actualPage = '/search-page'
      app.render(req, res, actualPage)
    })

    server.post('/auth/login', (req, res) => authApi.login(req, res));
    server.get('/news/get-news', (req, res) => newsApi.getNews(req, res));
    server.get('/news/news-detail/:id', (req, res) => newsApi.getNewsDetail(req, res));
    server.get('/news/search', (req, res) => newsApi.searchNews(req, res));

    server.get('/health', (req, res) => res.status(200).send('OK'));
    server.get('*', (req, res) => {
      return handle(req, res);
    });

    server.listen(port, host, err => {
      if (err) throw err;
      console.log(`Ready on port: ${port}`);
    });
  })
  .catch(ex => {
    console.error(ex.stack);
    process.exit(1);
  });
