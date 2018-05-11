import { ensureJudge } from '../../middleware/validators'
import * as judge from './controller'

export const baseUrl = '/judges'

export default [
  {
    method: 'POST',
    route: '/',
    handlers: [
      judge.createJudge
    ]
  },
  {
    method: 'GET',
    route: '/',
    handlers: [
      ensureJudge,
      judge.getJudges
    ]
  },
  {
    method: 'GET',
    route: '/:id',
    handlers: [
      ensureJudge,
      judge.getJudge
    ]
  },
  {
    method: 'PUT',
    route: '/:id',
    handlers: [
      ensureJudge,
      judge.getJudge,
      judge.updateJudge
    ]
  },
  {
    method: 'DELETE',
    route: '/:id',
    handlers: [
      ensureJudge,
      judge.getJudge,
      judge.deleteJudge
    ]
  }
]
