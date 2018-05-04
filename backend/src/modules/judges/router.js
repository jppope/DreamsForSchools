import { ensureUser } from '../../middleware/validators'
import * as judge from './controller'

export const baseUrl = '/judges'

export default [
  {
    method: 'POST',
    route: '/',
    handlers: [
      ensureUser,
      judge.createJudge
    ]
  },
  {
    method: 'GET',
    route: '/',
    handlers: [
      ensureUser,
      judge.getJudge
    ]
  },
]
