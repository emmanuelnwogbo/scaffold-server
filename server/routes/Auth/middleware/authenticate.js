import User from '../../../db/models/User';

const authenticate = (req, res, next) => {
  const token = req.header('x-auth');

  User.findByToken(token).then(user => {
    if (!user) {
      return Promise.reject();
    }

    req.user = user;
    req.token = token;
    next()
  }).catch(err => {
    res.status(400).json({
      error_message: err
    })
  })
}

export default authenticate;