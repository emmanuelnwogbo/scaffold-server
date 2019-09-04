const genPhotoPlaceHolder = (firstname, lastname) => {
  const abbreviation = firstname.split('')[0];
  const abbreviation1 = lastname.split('')[0];
  return `${abbreviation}${abbreviation1}`.toUpperCase();
}

export default genPhotoPlaceHolder;