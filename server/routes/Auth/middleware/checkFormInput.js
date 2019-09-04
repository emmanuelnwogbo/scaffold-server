import validator from 'validator';

const checkFormInput = (req, res, next) => {
  const { 
    firstname,
    lastname,
    username,
    email,
    password,
    confirmpassword
  } = req.body;

  let credentialError = false;

  if (firstname === undefined) {
    validator.isEmpty(password) ? credentialError = true : null
    validator.isEmpty(email) ? credentialError = true : null
    !validator.isEmail(email) ? credentialError = true : null

    if (credentialError) {
      return res.status(403).json({
        message: 'some fields have not been filled properly'
      });
    }

    next();
    return;
  }

  validator.isEmpty(username) ||
  validator.isEmpty(firstname) ||
  validator.isEmpty(lastname) ||
  validator.isEmpty(password) || 
  validator.isEmpty(confirmpassword) || 
  validator.isEmpty(email) ? credentialError = true : null
  !validator.isEmail(email) ? credentialError = true : null
  confirmpassword !== undefined && !validator.equals(password, confirmpassword) ? credentialError = true : null
  
  if (credentialError) {
    return res.status(403).json({
      message: 'some fields have not been filled properly'
    });
  }

  next();
}

export default checkFormInput;