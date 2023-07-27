const moment = require("moment");

const updatePastorGreetingsPayload = (params, user) => ({
  title: params.title,
  episode: params.episode,
  video_url: params.video_url,
  updated_by: user,
  updatedAt: moment().toISOString(),
});

module.exports = { updatePastorGreetingsPayload };
