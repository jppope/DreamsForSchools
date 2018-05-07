import Event from '../../models/Event'

export async function createEvent(ctx) {
  console.log(ctx)
  //Event.create(ctx)

  ctx.body = {
    example: "hello world",
  }
}

export async function getEvents (ctx) {
  const events = await Event.find({}).sort({"date": -1})
  // const users = {"Foo": "Bar"};
  ctx.body = { events }
}


