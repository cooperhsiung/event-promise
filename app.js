/**
 * Created by Cooper on 2018/05/22.
 */
const app = new (require('koa'))();
const player = new (require('./Player'))();

app.use(async ctx => {
  const txt = await player.onRes();
  ctx.body = txt;
});

if (!module.parent) app.listen(3000);

module.exports = app;
