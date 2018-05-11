import Team from '../../models/Team'

export async function getTeams(ctx) {
  const teams = await Team.find({})
  ctx.body = { teams }
}


