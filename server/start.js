// The following is in the `start.js` file

// say our sequelize instance is create in 'db.js'
const db = require('./db.js');
// and our server that we already created and used as the previous entry point is 'server.js'
const app = require('./index');
const port = process.env.PORT || 3000;

// db.sync() // sync our database
//   .then(function () {
//     app.listen(port); // then start listening with our express server once we have synced
//   })

(async function startServer() {
  try {
    await db.sync();
    app.listen(port, function () {
      console.log('Knock, knock');
      console.log("Who's there?");
      console.log(`You're server, listening on port ${port}`);
    });
  } catch (err) {
    console.error(err);
  }
})();
