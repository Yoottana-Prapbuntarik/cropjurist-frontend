import express from 'express'
import next from 'next'

const nextI18NextMiddleware = require('next-i18next/middleware').default

const nextI18next = require('../i18n')

const port = process.env.PORT || 3000
const app = next({ dev: process.env.NODE_ENV !== 'production' })
const handle = app.getRequestHandler()

async function printError (error: any) {
  console.log(error)
}

(async () => {
  await app.prepare()
  const server = express()

  try {
    server.use(nextI18NextMiddleware(nextI18next))
  } catch (e) {
    printError(e)
    throw e
  }

  // handle nextjs routing
  server.get('*', (req: any, res: any) => handle(req, res))

  server.listen(port)
  console.log(`🚀 Ready on http://localhost:${port}`) // eslint-disable-line no-console
})()

export default undefined
