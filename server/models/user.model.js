const { model, Schema, models } = require('mongoose')

for (let model in models) delete models[model]

const userSchema = new Schema({
    login: {
        type: String,
        unique: true,
        required: true
    },
    password: {
        type: String,
        required: true,
        minLength: 6
    }
})

module.exports = model('users', userSchema)
