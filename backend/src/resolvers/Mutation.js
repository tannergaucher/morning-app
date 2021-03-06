const { hash, compare } = require('bcrypt')
const { sign } = require('jsonwebtoken')

const { getUserId, AuthError } = require('../utils/getUserId')

const Mutation = {
  signup: async (parent, { name, email, password }, context) => {
    const hashedPassword = await hash(password, 10)
    const user = await context.prisma.createUser({
      name,
      email,
      password: hashedPassword,
    })

    const token = sign({ userId: user.id }, process.env.APP_SECRET)

    context.response.cookie('token', token, {
      httpOnly: true,
      maxAge: 1000 * 60 * 60 * 24 * 365,
    })

    return {
      token,
      user,
    }
  },
  signin: async (parent, { email, password }, context) => {
    const user = await context.prisma.user({ email })

    if (!user) {
      throw new Error(`No user found for this email`)
    }

    const passwordValid = await compare(password, user.password)
    if (!passwordValid) {
      throw new Error(`Invalid Password`)
    }

    const token = sign({ userId: user.id }, process.env.APP_SECRET)

    context.response.cookie('token', token, {
      httpOnly: true,
      maxAge: 1000 * 60 * 60 * 24 * 365,
    })

    return {
      token,
      user,
    }
  },
  signout: (parent, { id }, context) => {
    context.response.clearCookie('token')

    return { message: 'Goodbye' }
  },
  createAffirmation: (parent, { text }, context) => {
    const userId = getUserId(context)

    if (!userId) {
      throw new AuthError()
    }

    return context.prisma.createAffirmation({
      text: text,
      user: {
        connect: {
          id: userId,
        },
      },
    })
  },
}

module.exports = {
  Mutation,
}
