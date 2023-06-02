import React, { Fragment } from 'react';
import { useForm, Controller } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as Yup from 'yup';

export const validationSchema = Yup.object().shape({
  name: Yup.string().required('Item name is required'),
  price: Yup.string()
    .matches(/\d*.\d{0,2}/m, 'Invalid price')
});