const Validator = require("validator");
const isEmpty = require("./is-empty");

module.exports = function validateRegisterInput(data) {
  let errors = {};

  data.name = !isEmpty(data.name) ? data.name : "";
  data.email = !isEmpty(data.email) ? data.email : "";
  data.password = !isEmpty(data.password) ? data.password : "";
  data.password2 = !isEmpty(data.password2) ? data.password2 : "";

  if (!Validator.isLength(data.name, { min: 2, max: 30 })) {
    errors.name = "Le nom doit comprendre entre 2 et 30 caractères";
  }
  if (Validator.isEmpty(data.name)) {
    errors.name = "Le champ du nom est obligatoire";
  }

  if (!Validator.isLength(data.email, { min: 3, max: 100 })) {
    errors.email = "Le champ email ne doit pas deppaser 100 caractères";
  }
  if (!Validator.isEmail(data.email)) {
    errors.email = "Email is invalid";
  }
  if (Validator.isEmpty(data.email)) {
    errors.email = "Le champ email est obligatoire";
  }

  if (!Validator.isLength(data.password, { min: 6, max: 30 })) {
    errors.password = "Le mot de passe doit contenir entre 6 et 30 caractères";
  }

  if (Validator.isEmpty(data.password)) {
    errors.password = "Le champ mot de passe est obligatoire";
  }

  if (Validator.isEmpty(data.password2)) {
    errors.password2 = "Le champ confirmer mot de passe est obligatoire";
  } else {
    if (!Validator.equals(data.password, data.password2)) {
      errors.password2 = "les mots de passe doivent correspondre";
    }
  }
  if (!Validator.isLength(data.password2, { min: 6, max: 30 })) {
    errors.password2 =
      "Le champ Confirmer le mot de passe doit contenir entre 6 et 30 caractères";
  }

  return {
    errors,
    isValid: isEmpty(errors)
  };
};
