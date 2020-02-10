const Validator = require("./node_modules/validator");
const isEmpty = require("./is-empty");

module.exports = function validatePostInput(data) {
  let errors = {};

  data.text = !isEmpty(data.text) ? data.text : "";

  if (!Validator.isLength(data.text, { min: 10, max: 300 })) {
    errors.text = "Post must be between 10 and 300 characters";
  }


  if (Validator.isEmpty(data.text)) {
    errors.text = "Ecrire une description";
  }

  if (Validator.isEmpty(data.ville)) {
    errors.text = "La ville est obligatoire";
  }

  if (Validator.isEmpty(data.Situation)) {
    errors.text = "vous etes donneur ou receveur ?";
  }
  if (Validator.isEmpty(data.GrSanguin)) {
    errors.text = "Choisir votre group sanguin !";
  }

  if (Validator.isEmpty(data.Tele)) {
    errors.text = "Le numero de telephone est obligatoire";
  }

  // if (!Validator.isLength(data.text, { min: 10, max: 10 })) {
  //   errors.text = "Ne doit pas contient des characteres";
  // }

  return {
    errors,
    isValid: isEmpty(errors)
  };
};
