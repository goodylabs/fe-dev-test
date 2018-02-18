import React from 'react';
import { reduxForm, Field } from 'redux-form';
import PropTypes from 'prop-types';
import FormField from './FormField';

const required = (value) => {
  if (value) {
    return undefined;
  }
  return '* This field is required';
};

class RegisterForm extends React.Component {
  render() {
    const { handleSubmit } = this.props;
    return (
      <div className="row">
        <div className="col-sm-12 col-md-6 col-md-offset-3">
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <Field
                name="first_name"
                type="text"
                component={FormField}
                label="First name"
                validate={[required]}
              />
            </div>
            <div className="form-group">
              <Field
                name="last_name"
                type="text"
                component={FormField}
                label="Last name"
                validate={[required]}
              />
            </div>
            <div className="form-group">
              <Field
                name="email"
                type="email"
                component={FormField}
                label="email"
                validate={[required]}
              />
            </div>
            <div className="text-center">
              <button type="submit" className="btn-lg btn btn-primary" style={{backgroundColor: '#398193', borderColor: '#398193'}}>
                  Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

RegisterForm.propTypes = {
  handleSubmit: PropTypes.func
};

export default reduxForm({
  form: 'signup'
})(RegisterForm);
