import React from 'react';
import axios from 'axios';
import { uniqueId } from 'lodash';
import { Field, FieldArray, Formik } from 'formik';
import { Form, Input, Button, Icon, Modal, Alert, Row } from 'antd';
import { contactsSchema } from './schemas';
import Users from './Users';
import CustomInput from './CustomInput';

const Register = () => {
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
    >
      {formData => {
        const { values, errors, touched, handleChange, handleSubmit, isSubmitting } = formData;
        return (
          <Form onSubmit={handleSubmit}>
            <CustomInput
              formData={formData}
              itemData={{
                placeholder: 'Enter your name',
                name: 'name',
                icon: 'user',
                label: 'Name',
                type: 'text',
              }}
            />
            <CustomInput
              formData={formData}
              itemData={{
                placeholder: 'Type password',
                name: 'password',
                icon: 'lock',
                label: 'Password',
                type: 'password',
              }}
            />
            <CustomInput
              formData={formData}
              itemData={{
                placeholder: 'Repeat password',
                name: 'repeatPassword',
                icon: 'lock',
                label: 'Repeat Password',
                type: 'password',
              }}
            />
            <CustomInput
              formData={formData}
              itemData={{
                placeholder: 'Enter your email',
                name: 'email',
                icon: 'mail',
                label: 'Email',
                type: 'email',
              }}
            />
            <CustomInput
              formData={formData}
              itemData={{
                placeholder: 'Your Website',
                name: 'website',
                icon: 'link',
                label: 'Website URL',
                type: 'text',
              }}
            />
            <CustomInput
              formData={formData}
              itemData={{
                placeholder: 'Your Age',
                name: 'age',
                icon: 'idcard',
                label: 'Age',
                type: 'text',
              }}
            />
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
        );
      }}
    </Formik>
  );
};

export default Register;
