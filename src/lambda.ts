import { Hono } from 'hono'
import { handle } from 'hono/aws-lambda'
import server from './server' // exports { fetch, port }

const bridge = new Hono()

// Forward every request to the existing fetch without env/executionCtx
bridge.all('*', (c) => server.fetch(c.req.raw))

export const handler = handle(bridge)

