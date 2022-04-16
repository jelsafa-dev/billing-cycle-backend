const mongoose = require('mongoose')
mongoose.Promise = global.Promise
module.exports = mongoose.connect('mongodb://localhost/mymoney', { useNewUrlParser: true, useMongoClient: true })

mongoose.Error.messages.general.required = "The attribute '{PATH}' is required."
mongoose.Error.messages.Number.min = "The value '{VALUE}' is less than the minimum '{MIN}'."
mongoose.Error.messages.Number.max = "The value '{VALUE}' is more than the maximum '{MAX}'."
mongoose.Error.messages.String.enum = "The value '{VALUE}' is not valid for the attribute '{PATH}'."