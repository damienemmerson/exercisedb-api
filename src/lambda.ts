import { Hono } from 'hono'
import { handle } from 'hono/aws-lambda'
import server from './server' // exports { fetch, port }

const bridge = new Hono()

bridge.all('*', (c) => server.fetch(c.req.raw, {} as object, c.executionCtx))

export const handler = handle(bridge)
