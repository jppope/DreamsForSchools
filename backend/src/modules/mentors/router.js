import { ensureUser } from '../../middleware/validators'
import * as mentors from './controller'

export const baseUrl = '/mentors'

export default [
  // {
  //   method: 'POST',
  //   route: '/',
  //   handlers: [
  //     // ensureUser,
  //     rsvp.createRsvp,
  //   ]
  // },
  {
    method: 'GET',
    route: '/',
    handlers: [
      // ensureUser,
      mentors.getMentors
    ]
  },
]
