import { Hono } from "hono";

export const apiRequest = new Hono()

apiRequest.get('/api',(c) => {
  return c.json({message: 'Hello World!'})
})