module.exports = function(app) {
	var api = require('./api.js')();

	app.use('/api', api);

}