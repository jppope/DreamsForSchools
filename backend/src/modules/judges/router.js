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
      judge.getJudges
    ]
  },
  {
    method: 'GET',
    route: '/events/:id',
    handlers: [
      judge.eventJudges
    ]
  },
  {
    method: 'GET',
    route: '/:id',
    handlers: [
      judge.getJudge
    ]
  },
  {
    method: 'PUT',
    route: '/:id/event-update',
    handlers: [
      judge.changeEvents
    ]
  },
  {
    method: 'PUT',
    route: '/:id',
    handlers: [
      judge.getJudge,
      judge.updateJudge
    ]
  },
  {
    method: 'DELETE',
    route: '/:id',
    handlers: [
      judge.deleteJudge
    ]
  }
]
