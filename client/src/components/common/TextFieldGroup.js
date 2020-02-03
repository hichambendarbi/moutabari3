import React from "react";
import classnames from "classnames";
import propTypes from "prop-types";

const TextFieldGroup = ({
  name,
  placeholder,
  value,
  error,
  info,
  type,
  onChange,
  disabled,
  style
  // defaultValue
}) => {
  return (
    <div className="form-group"style={style}>
      {placeholder && <div>{placeholder}</div>}
      <input
        type={type}
        className={classnames("form-control form-control-lg", {
          "is-invalid": error
        })}
        name={name}
        value={value ? value : ""}
        onChange={onChange}
        disabled={disabled}
      />
      {info && <small className="form-text text-muted">{info}</small>}
      {error && <div className="invalid-feedback">{error}</div>}
    </div>
  );
};

TextFieldGroup.propTypes = {
  name: propTypes.string.isRequired,
  style: propTypes.string.isRequired,
  placeholder: propTypes.string,
  value: propTypes.string,
  info: propTypes.string,
  error: propTypes.string,
  type: propTypes.string.isRequired,
  onChange: propTypes.func,
  disabled: propTypes.string
};

TextFieldGroup.defaultProps = {
  type: "text"
};

export default TextFieldGroup;
