const yup = require('yup');

const contactsSchema = yup.object().shape({
  name: yup
    .string()
    .max(50, 'Too long Name')
    .required('Name is required field.'),
  password: yup
    .string()
    .required('Password is required field.')
    .matches(
      /^(?=^.{8,40}$)((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z]).*$/,
      'Password must contains 8-40 latin symbols, one on upper case, and one digit.'
    ),
  repeatPassword: yup.string().oneOf([yup.ref('password'), null, ''], 'Passwords must match'),
  email: yup
    .string()
    .email('Invalid email address.')
    .required('Email is required field.'),
  website: yup.string().url(),
  age: yup
    .number()
    .required('Age is required field.')
    .min(18, '18 is min age')
    .max(65, '65 is the max age'),
  skills: yup.array().of(
    yup.object().shape({
      id: yup.string(),
      value: yup.string(),
    })
  ),
  acceptTerms: yup.bool(),
});

module.exports.contactsSchema = contactsSchema;
