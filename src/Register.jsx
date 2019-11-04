import React from 'react';
import { Formik } from 'formik';
import { Form, Input, Button, Checkbox, Icon } from 'antd';
import contactsSchema from './schemas';

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
        initialValues={{
          name: '',
          email: '',
          password: '',
          repeatPassword: '',
          website: '',
          age: null,
          skills: [],
          acceptTerms: false,
        }}
        validationSchema={contactsSchema}
        onSubmit={(values, { setSubmitting }) => {
          setSubmitting(false);
        }}
        validate={values => {
          const errors = {};
          if (!/(^[0-9a-zA-Z]{8,40}$)([A-Z]+$)([0-9]+$)/.test(values.password)) {
            errors.password =
              'Password must contains 8-40 latin symbols, one on upper case, and one digit.';
          }
          return errors;
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
            <Form.Item label="Name">
              <Input
                placeholder="Enter your name"
                name="name"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.name}
                prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
              />
              {errors.name && touched.name && errors.name}
            </Form.Item>
            <Form.Item label="Password">
              <Input.Password
                placeholder="Type password"
                name="password"
                type="password"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.password}
                prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
              />
              {errors.password && touched.password && errors.password}
            </Form.Item>
            <Form.Item label="Repeat Password">
              <Input.Password
                placeholder="Repeat password"
                name="repeatPassword"
                type="password"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.repeatPassword}
                prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
              />
              {errors.repeatPassword && touched.repeatPassword && errors.repeatPassword}
            </Form.Item>
            <Form.Item label="Email">
              <Input
                placeholder="Enter your email"
                name="email"
                type="email"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.email}
                prefix={<Icon type="mail" style={{ color: 'rgba(0,0,0,.25)' }} />}
              />
              {errors.email && touched.email && errors.email}
            </Form.Item>
            <Form.Item label="Website URL">
              <Input
                placeholder="Your Website"
                name="website"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.website}
                prefix={<Icon type="link" style={{ color: 'rgba(0,0,0,.25)' }} />}
              />
              {errors.website && touched.website && errors.website}
            </Form.Item>
            <Form.Item label="Age">
              <Input
                placeholder="Your Age"
                name="age"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.age}
                prefix={<Icon type="idcard" style={{ color: 'rgba(0,0,0,.25)' }} />}
              />
              {errors.age && touched.age && errors.age}
            </Form.Item>
            <Form.Item label="Skills">
              <Input
                placeholder="Add Your Skill"
                name="skills"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.skills}
                prefix={<Icon type="star" style={{ color: 'rgba(0,0,0,.25)' }} />}
              />
            </Form.Item>
            <Form.Item>
              <Checkbox name="acceptTerms" checked={values.acceptTerms}>
                I have read the <a href="#agreement">agreement {field}</a>
              </Checkbox>
              {errors.acceptTerms && touched.acceptTerms && errors.acceptTerms}
            </Form.Item>
            <Button type="primary" htmlType="submit" block disabled={isSubmitting}>
              Register
            </Button>
          </Form>
        )}
      </Formik>
    );
  }
}
