import * as yup from 'yup';

export const contractValidationSchema = yup.object().shape({
  freelancer_id: yup.string().nullable().required(),
  application_id: yup.string().nullable().required(),
});
