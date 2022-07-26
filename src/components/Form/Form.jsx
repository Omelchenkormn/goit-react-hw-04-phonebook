import React from 'react';
import { Formik, ErrorMessage } from 'formik';
import * as yup from 'yup';

// import { nanoid } from 'nanoid/non-secure';

import { Button } from './Form.styled';
import { Label } from './Form.styled';
import { Input } from './Form.styled';
import { Forms } from './Form.styled';
import { Error } from './Form.styled';
// import { Component } from './Form.styled';

const initialValues = {
  name: '',
  number: '',
};
const validSchema = yup.object().shape({
  name: yup
    .string()
    .min(2)
    .max(15)
    .typeError('Должно быть строкой')
    .required('Required'),
  number: yup.string().min(6).max(12).required('Required'),
});

const ContactForm = ({ onSubmit }) => {
  const handleSubmit = (initialValues, { resetForm }) => {
    const { name, number } = initialValues;
    onSubmit(name, number);
    resetForm();
  };
  return (
    <Formik
      validationSchema={validSchema}
      validateOnBlur={true}
      // validateOnChange={true}
      initialValues={initialValues}
      onSubmit={handleSubmit}
    >
      <Forms autoComplete="off">
        <Label htmlFor="name">
          Name
          <Input type="text" name="name" />
          <Error>
            <ErrorMessage name="name" />{' '}
          </Error>
        </Label>
        <Label htmlFor="number">
          Number
          <Input type="tel" name="number" />
          <Error>
            <ErrorMessage name="number" />
          </Error>
        </Label>
        <Button type="submit">Add contact</Button>
      </Forms>
    </Formik>
  );
};

export default ContactForm;

// htmlFor={this.nameId} for label
