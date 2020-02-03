const Validator = require("validator");
const isEmpty = require("./is-empty");

module.exports = function validateNewPasswordInput(data) {
  let errors = {};

  data.email = !isEmpty(data.email) ? data.email : "";
  data.password = !isEmpty(data.password) ? data.password : "";

  if (!Validator.isEmail(data.email)) {
    errors.email = "Email invalide";
  }

  if (Validator.isEmpty(data.email)) {
    errors.email = "champ requis";
  }

  if (!Validator.isLength(data.email, { min: 2, max: 30 })) {
    errors.email = "Entrer un email correct";
  }

  if (Validator.isEmpty(data.password)) {
    errors.password = "champ requis";
  }

  if (!Validator.isLength(data.password, { min: 2, max: 30 })) {
    errors.password = "mpt de passe incorrect";
  }

  data.newpassword = !isEmpty(data.newpassword) ? data.newpassword : "";
  data.confirmNewPassword = !isEmpty(data.confirmNewPassword)
    ? data.confirmNewPassword
    : "";

  if (!Validator.isLength(data.newpassword, { min: 6, max: 30 })) {
    errors.newpassword = "Le mot de passe doit contient Plus de 6 caracteres et moins de 30 caracteres";
  }

  if (Validator.isEmpty(data.newpassword)) {
    errors.newpassword = "champ mot de passe est vide !";
  }

  if (Validator.isEmpty(data.confirmNewPassword)) {
    errors.confirmNewPassword = "Cofirmation mot de passe est vide !";
  } else {
    if (!Validator.equals(data.newpassword, data.confirmNewPassword)) {
      errors.confirmNewPassword = "Retapz le meme mot de passe";
    }
  }
  if (!Validator.isLength(data.confirmNewPassword, { min: 6, max: 30 })) {
    errors.confirmNewPassword =
      "Confirmation mot de passe doit contient Plus de 6 caracteres et moins de 30 caracteres";
  }

  return {
    errors,
    isValid: isEmpty(errors)
  };
};
