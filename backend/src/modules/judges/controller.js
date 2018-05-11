import Judge from '../../models/Judge'

export async function createJudge (ctx) {
  const judge = new Judge(ctx.request.body.judge)
  try {
    await judge.save()
  } catch (err) {
    ctx.throw(422, err.message)
  }
}

export async function getJudges (ctx) {
  const judges = await Judge.find({})
  ctx.body = { judges }
}

export async function getJudge (ctx, next) {
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

export async function updateJudge (ctx) {
  const judge = ctx.body.judge

  Object.assign(judge, ctx.request.body.judge)

  await judge.save()
  ctx.body = { judge }
}

export async function deleteJudge (ctx) {
  const judge = ctx.body.judge

  await judge.remove()

  ctx.status = 200
  ctx.body = {
    success: true
  }
}
