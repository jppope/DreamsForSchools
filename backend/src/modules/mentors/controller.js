import Mentor from '../../models/Mentor'

export async function getMentors(ctx) {
  const mentors = await Mentor.find({})
  ctx.body = { mentors }
}


