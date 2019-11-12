import React from 'react';
import axios from 'axios';
import { uniqueId } from 'lodash';
import { Field, FieldArray, Formik } from 'formik';
import { Form, Input, Button, Icon, Modal, Alert, Row } from 'antd';
import { contactsSchema } from './schemas';
import Users from './Users';

const Register = () => {
  // noinspection HtmlUnknownAnchorTarget
  return (
    <Formik
      initialValues={{
        name: '',
        email: '',
        password: '',
        repeatPassword: '',
        website: '',
        age: '',
        skills: [],
        acceptTerms: true,
      }}
      validationSchema={contactsSchema}
      onSubmit={(values, { setSubmitting, setFieldError }) => {
        setSubmitting(false);
        const data = JSON.stringify(values, [
          'name',
          'email',
          'password',
          'website',
          'age',
          'skills',
          'id',
          'value',
        ]);
        const axiosConfig = {
          headers: {
            'Content-Type': 'application/json;charset=UTF-8',
          },
        };
        axios
          .post('/sign-up', data, axiosConfig)
          .then(resp => {
            Modal.success({
              content: resp.data,
            });
          })
          .catch(e => {
            setFieldError(e.response.data.field, e.response.data.message);
          });
        setSubmitting(true);
      }}
      validate={values => {
        const errors = {};
        if (values.password !== values.repeatPassword) {
          errors.repeatPassword = 'Passwords do not match';
        }
        if (!values.acceptTerms) {
          errors.acceptTerms = 'You need accept terms';
        }
        return errors;
      }}
    >
      {({ values, errors, touched, handleChange, handleBlur, handleSubmit, isSubmitting }) => (
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
            {errors.name && touched.name && <Alert message={errors.name} type="error" />}
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
            {errors.password && touched.password && (
              <Alert message={errors.password} type="error" />
            )}
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
            {errors.repeatPassword && touched.repeatPassword && (
              <Alert message={errors.repeatPassword} type="error" />
            )}
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
            {errors.email && touched.email && <Alert message={errors.email} type="error" />}
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
            {errors.website && touched.website && <Alert message={errors.website} type="error" />}
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
            {errors.age && touched.age && <Alert message={errors.age} type="error" />}
          </Form.Item>
          <FieldArray name="skills">
            {arrayHelpers => (
              <Form.Item label="Skills">
                {values.skills.length > 0 &&
                  values.skills.map((skill, idx) => (
                    <Row key={skill.id}>
                      <Input
                        placeholder="Add Your Skill"
                        name={`skills[${idx}].value`}
                        onChange={handleChange}
                        value={skill.value}
                        prefix={<Icon type="star" style={{ color: 'rgba(0,0,0,.25)' }} />}
                      />
                      <Icon
                        className="dynamic-delete-button"
                        type="minus-circle-o"
                        onClick={() => arrayHelpers.remove(idx)}
                      />
                    </Row>
                  ))}
                <Button
                  type="dashed"
                  onClick={() => arrayHelpers.push({ id: uniqueId(), value: '' })}
                  style={{ width: '60%' }}
                >
                  <Icon type="plus" /> Add new skill
                </Button>
              </Form.Item>
            )}
          </FieldArray>
          <Form.Item>
            <Field type="checkbox" name="acceptTerms" /> I have read the{' '}
            <a href="#agreement">agreement</a>
            {errors.acceptTerms && touched.acceptTerms && (
              <Alert message={errors.acceptTerms} type="error" />
            )}
          </Form.Item>
          <Button type="primary" htmlType="submit" block disabled={isSubmitting}>
            Register
          </Button>
          <Users />
        </Form>
      )}
    </Formik>
  );
};

export default Register;
