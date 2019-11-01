import React from 'react';
import { Formik } from 'formik';
import { Form, Input, Button, Checkbox } from 'antd';

export default class Register extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      field: null,
    };
  }

  render() {
    const { field } = this.state;
    return (
      <Formik
        initialValues={{ name: '', email: '' }}
        validate={values => {
          const errors = {};
          if (!values.email) {
            errors.email = 'Required';
          } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) {
            errors.email = 'Invalid email address';
          }
          return errors;
        }}
        onSubmit={(values, { setSubmitting }) => {
          setTimeout(() => {
            alert(JSON.stringify(values, null, 2));
            setSubmitting(false);
          }, 400);
        }}
      >
        {({
          values,
          errors,
          touched,
          handleChange,
          handleBlur,
          handleSubmit,
          isSubmitting,
          /* and other goodies */
        }) => (
          <Form onSubmit={handleSubmit}>
            <Form.Item>
              <Input
                placeholder="Enter your name"
                name="name"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.name}
              />
            </Form.Item>
            {errors.name && touched.name && errors.name}
            <Form.Item>
              <Input
                placeholder="Type password"
                name="password"
                type="password"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.password}
              />
            </Form.Item>
            <Form.Item>
              <Input
                placeholder="Repeat password"
                name="repeatPassword"
                type="password"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.repeatPassword}
              />
            </Form.Item>
            <Form.Item>
              <Input
                placeholder="Enter your email"
                name="email"
                type="email"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.email}
              />
              {errors.email && touched.email && errors.email}
            </Form.Item>
            <Form.Item>
              <Input
                placeholder="Your Website"
                name="website"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.website}
              />
            </Form.Item>
            <Form.Item>
              <Input
                placeholder="Your Age"
                name="age"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.age}
              />
            </Form.Item>
            <Form.Item>
              <Input
                placeholder="Add Your Skill"
                name="skills"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.skills}
              />
            </Form.Item>
            <Form.Item>
              <Checkbox>
                I have read the <a href="#agreement">agreement {field}</a>
              </Checkbox>
            </Form.Item>
            <Button type="primary" htmlType="submit" disabled={isSubmitting}>
              Register
            </Button>
          </Form>
        )}
      </Formik>
    );
  }
}
