import { Hono } from 'hono'


type Bindings = {
  DB: D1Database
}

const app = new Hono<{ Bindings: Bindings }>().basePath("/api")

app.get("/", (c) => {
  return c.text("Hello World")
})
// app.notFound('/'())  
export default app



