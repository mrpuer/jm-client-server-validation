import React from 'react';
import PropTypes from 'prop-types';
import { Alert, Form, Icon, Input } from 'antd';

const CustomInput = ({ formData, itemData }) => {
  const { handleBlur, handleChange, values, errors, touched } = formData;
  const { placeholder, name, icon, label, type } = itemData;
  return (
    <Form.Item label={label}>
      <Input
        placeholder={placeholder}
        name={name}
        onBlur={handleBlur}
        onChange={handleChange}
        value={values[name]}
        prefix={<Icon type={icon} style={{ color: 'rgba(0,0,0,.25)' }} />}
        type={type}
      />
      {errors[name] && touched[name] && <Alert message={errors[name]} type="error" />}
    </Form.Item>
  );
};

CustomInput.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  formData: PropTypes.object.isRequired,
  // eslint-disable-next-line react/forbid-prop-types
  itemData: PropTypes.object.isRequired,
};

export default CustomInput;
