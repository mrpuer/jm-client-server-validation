import * as yup from 'yup';

const contactsSchema = yup.object().shape({
  name: yup
    .string()
    .max(50, 'Too long Name')
    .required('Name is required field.'),
  password: yup.string().required('Password is required field.'),
  repeatPassword: yup.string().required('You dont repeat password.'),
  email: yup
    .string()
    .email('Invalid email address.')
    .required('Email is required field.'),
  website: yup.string().url(),
  age: yup
    .number()
    .min(18, '18 is min age')
    .max(65, '65 is the max age')
    .required('Age is required field.'),
  skills: yup.array(),
  acceptTerms: yup.bool(),
});

export default contactsSchema;
