module.exports = class UserDto {
  id;
  isActivated;
  name;
  avatar;

  constructor(model) {
    this.name = model.name;
    this.id = model._id;
    this.isActivated = model.isActivated;
    this.avatar = model.avatar;
  }
};
