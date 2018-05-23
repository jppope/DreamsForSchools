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
  {
    method: 'PUT',
    route: '/:id',
    handlers: [
      // ensureUser,
      // user.getUser,
      event.updateEvent
    ]
  },
    {
      method: 'PUT',
      route: '/:id/score',
      handlers: [
        // ensureUser,
        // user.getUser,
        event.addScore
      ]
    },

]
