import { Hono } from 'hono';
import { apiRequest } from './test';

export const runtime = 'edge'
const app = new Hono().basePath('/api');

const routes = app.route('/test', apiRequest);

export type AppType = typeof routes;

export { app };
