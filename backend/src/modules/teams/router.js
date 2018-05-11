import { ensureUser } from '../../middleware/validators'
import * as teams from './controller'

export const baseUrl = '/teams'

export default [
  {
    method: 'GET',
    route: '/',
    handlers: [
      // ensureUser,
      teams.getTeams,
    ]
  },
]
