import * as Yup from "yup";

// export const LoginSchema = Yup.object().shape({
//   username: Yup.string()
//     .required("Username is required")
//     .matches(/^\S+$/, "Username must not contain spaces"),
//   email: Yup.string()
//     .email("Invalid email format")
//     .required("Email is required"),
//   age: Yup.number()
//     .required("Age is required")
//     .min(18, "Age must be at least 18")
//     .max(60, "Age must be less than or equal to 60"),
// });

export const LoginSchema = Yup.object().shape({
  name: Yup.string()
    .required("Name is required")
    .matches(/^[a-zA-Z\s]+$/, "Name must only contain letters and spaces"),
  email: Yup.string()
    .email("Invalid email format")
    .required("Email is required"),
  phone: Yup.string()
    .matches(/^\d{10}$/, "Phone number must be exactly 10 digits")
    .required("Phone number is required"),
});
