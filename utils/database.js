const logger = require('tracer').colorConsole();

require('./common');

var knex = require('knex')({
  client: 'mysql',
  connection: {
      host: 'sql3.freemysqlhosting.net',
	  user: 'sql3243857',
	  password: 'fGQnJNjnvB',
	  database: 'sql3243857'
  },
  pool: { min: 0, max: 7 },
  debug: true
});

// knex.select().from('Jobs').then(function(resp){
// 	logger.info(resp);
// })

// exports.connection = connection;
exports.knex = knex;