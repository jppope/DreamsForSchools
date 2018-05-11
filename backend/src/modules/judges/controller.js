import Judge from '../../models/Judge'

export async function createJudge(ctx) {

}

// get judges
export async function getJudges (ctx) {
  const judges = await Judge.find({})
  ctx.body = { judges }
}

// get judge
export async function getUser (ctx, next) {
  try {
    const judge = await Judge.findById(ctx.params.id)
    if (!judge) {
      ctx.throw(404)
    }

    ctx.body = {judge}
  } catch (err) {
    if (err === 404 || err.name === 'CastError') {
      ctx.throw(404)
    }

    ctx.throw(500)
  }

  if (next) { return next() }
}

// delete judge
export async function deleteJudge (ctx) {
  const judge = ctx.body.judge

  await judge.remove()

  ctx.status = 200
  ctx.body = {
    success: true
  }
}

/**
 * @api {get} /rsvp Get RSVP from a person
 * @apiPermission user
 * @apiVersion 1.0.0
 * @apiName GetUsers
 * @apiGroup Users
 *
 * @apiExample Example usage:
 * curl -H "Content-Type: application/json" -X GET localhost:5000/users
 *
 * @apiSuccess {Object[]} users           Array of user objects
 * @apiSuccess {ObjectId} users._id       User id
 * @apiSuccess {String}   users.name      User name
 * @apiSuccess {String}   users.username  User username
 *
 * @apiSuccessExample {json} Success-Response:
 *     HTTP/1.1 200 OK
 *     {
 *       "users": [{
 *          "_id": "56bd1da600a526986cf65c80"
 *          "name": "John Doe"
 *          "username": "johndoe"
 *       }]
 *     }
 *
 * @apiUse TokenError
 */
export async function getRsvp(ctx) {
  //const users = await User.find({}, '-password')
  const users = { "Foo": "Bar" };
  ctx.body = { users }
}
