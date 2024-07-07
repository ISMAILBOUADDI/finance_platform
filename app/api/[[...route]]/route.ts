import { Hono } from 'hono'
import { handle } from 'hono/vercel'
import { clerkMiddleware, getAuth } from '@hono/clerk-auth'

export const runtime = 'edge'

const app = new Hono().basePath('/api')

app.get('/hello/:id',
      clerkMiddleware(),
  (c) => 
  {
    const id = c.req.param("id");
    const auth = getAuth(c);
    if (!auth?.userId)
      return c.json({error: "Unauthoried"})
  return c.json({
    message: 'Hello Next.js!',
    id :id,
    userid: auth?.userId
  })
})

export const GET = handle(app)
export const POST = handle(app)