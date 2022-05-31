import { Router } from 'itty-router';
import indexTemplate from './templates/index.html';
import aboutTemplate from './templates/about.html';
import notFoundTemplate from './templates/404.html';

const router = Router();

router.get('/', () => {
  return new Response(indexTemplate, {
    headers: { 'Content-Type': 'text/html' },
  });
});

router.get('/about', () => {
  return new Response(aboutTemplate, {
    headers: { 'Content-Type': 'text/html' },
  });
});

router.all('*', () => {
  return new Response(notFoundTemplate, {
    headers: { 'Content-Type': 'text/html' },
    status: 404,
  });
});

addEventListener('fetch', (e) => {
  e.respondWith(router.handle(e.request));
});
