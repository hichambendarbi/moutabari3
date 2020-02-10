const Validator = require("./node_modules/validator");
const isEmpty = require("./is-empty");

module.exports = function validateProfileInput(data) {
  let errors = {};

  data.handle = !isEmpty(data.handle) ? data.handle : "";
  data.status = !isEmpty(data.status) ? data.status : "";
  // data.maladies = !isEmpty(data.maladies) ? data.maladies : "";

  if (!Validator.isLength(data.handle, { min: 2, max: 40 })) {
    errors.handle = "Le champ nom utulisateur doit contenir entre 6 et 30 caractères";
  }
  if (Validator.isEmpty(data.handle)) {
    errors.handle = "Champ requis";
  }

  if (Validator.isEmpty(data.sex)) {
    errors.handle = "Champ requis";
  }

  if (!Validator.isLength(data.status, { max: 100 })) {
    errors.status = "Le champ d'état doit contenir moins de 100 caractères";
  }
  if (Validator.isEmpty(data.status)) {
    errors.status = "Vous etes donneur ou receveur ?";
  }

  if (Validator.isEmpty(data.ville)) {
    errors.ville = "Le choix de la ville est obligatoire";
  }

  if (Validator.isEmpty(data.groupsanguin)) {
    errors.groupsanguin = "Indiquez votre groupe sanguin !";
  }

  if (Validator.isEmpty(data.age)) {
    errors.age = "Quel est votre age ?";
  }

  if (!Validator.isLength(data.maladies, { max: 500 })) {
    errors.maladies = "Ce champ doit contenir moins de 300 caractères";
  }
  // if (Validator.isEmpty(data.maladies)) {
  //   errors.maladies = "Champ requis";
  // }


  if (!Validator.isLength(data.youtube, { max: 100 })) {
    errors.youtube = "Youtube field must be less than 100 characters";
  }
  if (!isEmpty(data.youtube)) {
    if (!Validator.isURL(data.youtube)) {
      errors.youtube = "Not a valid URL";
    }
  }

  if (!Validator.isLength(data.twitter, { max: 100 })) {
    errors.twitter = "Twitter field must be less than 100 characters";
  }
  if (!isEmpty(data.twitter)) {
    if (!Validator.isURL(data.twitter)) {
      errors.twitter = "Not a valid URL";
    }
  }

  if (!Validator.isLength(data.facebook, { max: 100 })) {
    errors.facebook = "Facebook field must be less than 100 characters";
  }
  if (!isEmpty(data.facebook)) {
    if (!Validator.isURL(data.facebook)) {
      errors.facebook = "Not a valid URL";
    }
  }

  if (!Validator.isLength(data.linkedin, { max: 100 })) {
    errors.linkedin = "Linkedin field must be less than 100 characters";
  }
  if (!isEmpty(data.linkedin)) {
    if (!Validator.isURL(data.linkedin)) {
      errors.linkedin = "Not a valid URL";
    }
  }

  if (!Validator.isLength(data.instagram, { max: 100 })) {
    errors.instagram = "Instagram field must be less than 100 characters";
  }
  if (!isEmpty(data.instagram)) {
    if (!Validator.isURL(data.instagram)) {
      errors.instagram = "Not a valid URL";
    }
  }

  return {
    errors,
    isValid: isEmpty(errors)
  };
};
