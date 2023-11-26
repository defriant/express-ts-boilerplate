import { Response, Router } from 'express'
import exampleRoute from './example'

const Route = Router()

Route.use('/', exampleRoute)

Route.all('/*', (_, res: Response) => res.status(404).json({ message: 'Resource not found' }))

export default Route
