import { ensureUser } from '../../middleware/validators'
import * as event from './controller'

export const baseUrl = '/event'

export default [
  {
    method: 'POST',
    route: '/',
    handlers: [
      // ensureUser,
      event.createEvent
    ]
  },
  {
    method: 'GET',
    route: '/',
    handlers: [
      // ensureUser,
      event.getEvents
    ]
  },
]
