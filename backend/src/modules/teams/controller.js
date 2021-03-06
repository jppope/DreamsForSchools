import Team from '../../models/Team'
import { ADDRGETNETWORKPARAMS } from 'dns';

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

export async function addTeamToEvent(ctx) {

}

export async function topTeamBanner(ctx) {
  const top_banner = await Team.find().sort({banner_votes: -1}).limit(1);
  ctx.body = { top_banner };
}

export async function deleteTeam(ctx) {
  await Team.remove({ _id: ctx.params.id })
  ctx.status = 200
  ctx.body = {
    success: true
  }
}
