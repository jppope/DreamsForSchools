import Team from '../../models/Team'

export async function getTeams(ctx) {
  const teams = await Team.find({})
  ctx.body = { teams }
}

export async function createTeam(ctx) {
  const team = new Team(ctx.request.body.team)
  try {
    await team.save()
  } catch (err) {
    ctx.throw(422, err.message)
  }
  ctx.body = {
    status: 200,
    message: "you have successfully generated a team"
  }
}
