var mongoose = require('mongoose');

module.exports = mongoose.model('dummyDB', {
	text : {type : String, default: ''}
});