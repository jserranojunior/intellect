'use strict'

const User = use('App/Models/User')

class AuthController {
    async register({request}){
        const data = request.only(['email', 'password', 'username'])
        const user = await User.create(data)
        return user
    }
    async authenticate({request, auth}){
        const {email, password} = request.all()
        const token = await auth.attempt(email, password)
        return token
    }

    async user({response, auth}){
        try {
            return await auth.getUser()
          } catch (error) {
            response.send('You are not logged in')
          }
    }
}

module.exports = AuthController
