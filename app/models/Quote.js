var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var quoteSchema = new Schema({
	author: String,
	content: String
});

mongoose.model('Quote', quoteSchema);

