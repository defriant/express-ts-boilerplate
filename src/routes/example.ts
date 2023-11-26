import { Router } from 'express'
import { example } from '../controllers/ExampleController'

const exampleRoute = Router({ mergeParams: true })

exampleRoute.get('/', example)

export default exampleRoute
