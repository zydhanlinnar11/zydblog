const LocalStrategy = require('passport-local').Strategy
const bcrypt = require('bcrypt')

function initialize(passport, getUserbyUserName) {
  const authenticateUser = async (username, password, done) => {
    const user = await getUserbyUserName(username)
    if (user == null) return done(null, false, { message: 'User not found' })

    try {
      if (await bcrypt.compare(password, user.password)) {
        return done(null, user)
      } else {
        return done(null, false, { message: 'Password incorrect' })
      }
    } catch (error) {
      return error
    }
  }

  passport.use(
    new LocalStrategy({ usernameField: 'username' }, authenticateUser)
  )

  passport.serializeUser((user, done) => done(null, user.username))
  passport.deserializeUser((username, done) =>
    done(null, getUserbyUserName(username))
  )
}

module.exports = initialize
