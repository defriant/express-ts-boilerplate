import { Response, Router } from 'express'

const Route = Router()

const routes = (): Router => {
    Route.get('/*', (_, res: Response) => res.status(404).json({ message: 'Resource not found' }))

    return Route
}

export default routes
