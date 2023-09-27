import * as yup from 'yup';

export const applicationValidationSchema = yup.object().shape({
  freelancer_id: yup.string().nullable().required(),
  job_id: yup.string().nullable().required(),
});
