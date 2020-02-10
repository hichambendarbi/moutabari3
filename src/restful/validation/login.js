const Validator = require("./node_modules/validator");
const isEmpty = require("./is-empty");

module.exports = function validateLoginInput(data) {
  let errors = {};

  data.email = !isEmpty(data.email) ? data.email : "";
  data.password = !isEmpty(data.password) ? data.password : "";

  if (!Validator.isEmail(data.email)) {
    errors.email = "L'email est invalide";
  }

  if (Validator.isEmpty(data.email)) {
    errors.email = "Veillez utulisez votre email";
  }

  if (!Validator.isLength(data.email, { min: 2, max: 30 })) {
    errors.email = "L'email est incorrect";
  }

  if (Validator.isEmpty(data.password)) {
    errors.password = "entrez votre mot de passe";
  }

  if (!Validator.isLength(data.password, { min: 2, max: 30 })) {
    errors.password = "mot de passe incorect";
  }

  return {
    errors,
    isValid: isEmpty(errors)
  };
};
