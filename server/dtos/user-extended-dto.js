module.exports = class UserDto {
  email;
  id;
  isActivated;
  country;
  dob;
  wallet;
  name;
  avatar;

  constructor(model) {
    this.email = model.email;
    this.dob = model.dob;
    this.name = model.name;
    this.wallet = model.wallet;
    this.id = model._id;
    this.country = model.country;
    this.isActivated = model.isActivated;
    this.avatar = model.avatar;
  }
};
