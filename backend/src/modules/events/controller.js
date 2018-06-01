import Event from '../../models/Event'
import moment from 'moment';

export async function createEvent(ctx) {
  let message;
  try {
    await Event.create({
      name: ctx.request.body.event.name,
      date: `${moment(ctx.request.body.event.date).valueOf()}`
    });
    message = "success"
  } catch(err) {
    console.log(err);
    message = "Error"
  }
  ctx.body = { message }
}

export async function getEvents (ctx) {
  const events = await Event.find({}).sort({"date": -1})
  // const users = {"Foo": "Bar"};
  ctx.body = { events }
}

export async function updateEvent(ctx) {
  const teams = ctx.request.body.teams;
  const eventId = ctx.params.id

  await Event.findByIdAndUpdate(
    { _id: eventId },
    { $set: { teams: teams } },
    { upsert: true, new: true }
  );

  ctx.body = {
    status_code: 200
  }
}

export async function addEventTeam(ctx) {
    const eventId = ctx.params.id
    const team = ctx.request.body.team;
    await Event.findByIdAndUpdate({
      _id: eventId
    }, {
      $push: {
        teams: team
      }
    }, {
      upsert: true,
      new: true
    });

    ctx.body = {
      status_code: 200
    }
}

export async function addEventJudge(ctx) {
    const eventId = ctx.params.id
    const judge = ctx.request.body.judge;
    console.log(judge)
    await Event.findByIdAndUpdate({
      _id: eventId
    }, {
      $push: {
        judges: judge
      }
    }, {
      upsert: true,
      new: true
    });

    ctx.body = {
      status_code: 200
    }

}





export async function addScore(ctx) {
  const score = ctx.request.body.evaluation;
  const eventId = ctx.params.id

  await Event.findByIdAndUpdate({
    _id: eventId
  }, {
    $push: {
      scores: score
    }
  }, {
    upsert: true,
    new: true
  });

  ctx.body = {
    status_code: 200
  }
}

