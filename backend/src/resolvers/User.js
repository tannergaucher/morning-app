const User = {
  affirmations: ({ id }, args, context) => {
    return context.prisma.user({ id }).affirmations()
  },
}

module.exports = {
  User,
}
