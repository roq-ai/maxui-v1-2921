import * as yup from 'yup';

export const freelancerProfileValidationSchema = yup.object().shape({
  skills: yup.string().nullable(),
  portfolio_url: yup.string().nullable(),
  experience_years: yup.number().integer().nullable(),
  freelancer_id: yup.string().nullable().required(),
});
