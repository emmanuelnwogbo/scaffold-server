import _ from 'lodash';

import User from '../../db/models/User';

import checkFormInput from './middleware/checkFormInput';

export default app => {

  app.post('/auth/signin', checkFormInput, (req, res) => {

    const {
      email,
      password
    } = req.body;

    User.findByCredentials(email, password).then(user => {
      return user.generateAuthToken().then(token => {
        res.status(200).header('x-auth', token).json({
          data: user
        })
      })
    }).catch(err => {
      res.status(400).json({
        error_message: err
      })
    })
  });
}