import authenticate from './middleware/authenticate';

export default app => {

  app.delete('/auth/signout', authenticate, (req, res) => {
    req.user.removeToken(req.token).then(() => {
      res.status(200).json({
        data: 'signed out'
      })
    })
  });
}