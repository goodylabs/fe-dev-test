import React from 'react';
import PropTypes from 'prop-types';

const FormField = ({ input, label, type, meta: { error, touched } }) => (
  <div className="form-group">
    <label htmlFor={name}>{label}</label>
    <input className="form-control" {...input} type={type} name={name}/>
    {touched && (error && <div className="invalid-feedback" style={{display: 'block'}}>{error}</div>)}
  </div>
);

FormField.propTypes = {
  label: PropTypes.string,
  type: PropTypes.string,
  meta: PropTypes.object,
  input: PropTypes.object
};

export default FormField;
