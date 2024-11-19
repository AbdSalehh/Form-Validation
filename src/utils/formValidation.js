import * as Yup from "yup";

export const LoginSchema = Yup.object().shape({
  title: Yup.string().required("Email is required"),
  body: Yup.string().required("Password is required"),
});
