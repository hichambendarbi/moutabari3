const Validator = require("validator");
const isEmpty = require("./is-empty");

module.exports = function validateExperienceInput(data) {
  let errors = {};

  data.ville = !isEmpty(data.ville) ? data.ville : "";
  // data.title = !isEmpty(data.title) ? data.title : "";
  data.from = !isEmpty(data.from) ? data.from : "";

  let [ville,from,description, current] = [];
  let id = data.id;

  // let fromTest = new Date(data.from.replace("T00:00:00.000Z", ""));
  // if (data.to) {
  //   let toTest = new Date(data.to.replace("T00:00:00.000Z", ""));

  //   if (!data.current) {
  //     if (fromTest > toTest) {
  //       to = "From field must be before To field";
  //     }
  //     if (toTest > new Date()) {
  //       to = "To field must not be in the future";
  //     }
  //   }
  // }

  if (new Date(data.from.replace("T00:00:00.000Z", "")) < new Date()) {
    from = "La date doit etre en future";
  }

  // if (Validator.isEmpty(data.title)) {
  //   title = "Job title field is required";
  // }
  // if (!Validator.isLength(data.title, { max: 100 })) {
  //   title = "Title field must be less than 100 characters";
  // }

  if (Validator.isEmpty(data.ville)) {
    ville = "Ce champ requis";
  }
  if (!Validator.isLength(data.ville, { max: 100 })) {
    ville = "Ville ne doit pas depasser 100 caracteres";
  }

  // if (!Validator.isLength(data.location, { max: 100 })) {
  //   location = "Location field must be less than 100 characters";
  // }

  if (Validator.isEmpty(data.from)) {
    from = "Ce champ requis";
  }

  if (!Validator.isLength(data.description, { max: 100 })) {
    description = "Description ne doit pas depasser 100 caracteres";
  }

  if (id) {
    if ( ville || from || description || current) {
      errors = {
        [id]: {
          ville,
          from,
          description,
          current
        }
      };
    }
  } else {
    if (ville || from || description || current) {
      errors = {
      
        ville,
        from,
        // tp,
        description,
        current
      };
    }
  }

  return {
    errors,
    isValid: isEmpty(errors)
  };
};
