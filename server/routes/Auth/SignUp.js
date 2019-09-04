import validator from 'validator';
import _ from 'lodash';

import User from '../../db/models/User';

import checkFormInput from './middleware/checkFormInput';
import genPhotoPlaceHolder from '../../Utilities/genPhotoPlaceHolder';

export default app => {

  app.post('/auth/signup', checkFormInput, (req, res) => {
    let {
      firstname,
      lastname,
      photo
    } = req.body;

    if (validator.isEmpty(photo)) {
      photo = genPhotoPlaceHolder(firstname, lastname)
    }

    let body = _.pick(req.body, ['firstname', 'lastname', 'username', 'email', 'password']);
    const user = new User(body);
    user.photo = photo;
    user.save()
      .then(() => {
        return user.generateAuthToken();
      }).then(token => {
        res.status(200).header('x-auth', token).json({
          data: user
        })
      }).catch(err => {
        res.status(400).json({
          error_message: err
        })
      })
  });
}