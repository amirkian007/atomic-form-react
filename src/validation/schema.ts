import { Control, FieldErrors, UseFormRegister, UseFormWatch } from 'react-hook-form';
import * as Yup from 'yup';

export const userSchema = Yup.object({
  firstName: Yup.string().required('First Name is required'),
  lastName: Yup.string().required('Last Name is required'),
  address: Yup.string().nullable(),
  preferredContact: Yup.string()
    .oneOf(['Email', 'Phone'], 'Please select a valid contact method')
    .required('Preferred Contact Method is required'),
  phone: Yup.string().when('preferredContact', {
    is: 'Phone',
    then: () =>
      Yup.string()
        .matches(/^\d{11}$/, 'Phone must be an 11-digit number')
        .required('Phone number is required'),
    otherwise: () => Yup.string().notRequired(),
  }),
  email: Yup.string().when('preferredContact', {
    is: 'Email',
    then: () =>
      Yup.string()
        .email('Invalid email format')
        .required('Email is required'),
    otherwise: () => Yup.string().notRequired(),
  }),
  experiences: Yup.array().of(
    Yup.object().shape({
      experience: Yup.string().required('Experience is required'),
      duration: Yup.number()
        .typeError('Duration must be a number')
        .required('Duration is required'),
    })
  ),
});

export type Scheme = Yup.InferType<typeof userSchema>;
export type InputFields = keyof Scheme
export type FormErrorsFields = FieldErrors<Scheme>
export type RegisterFields = UseFormRegister<Scheme>
export type FormWatch = UseFormWatch<Scheme>
export type FromControl = Control<Scheme>