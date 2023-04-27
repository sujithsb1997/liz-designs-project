import * as Yup from 'yup'

export const loginSchema = Yup.object({
    email: Yup.string().email().required("Please Enter Email"),
    password: Yup.string().min(6).required("Please Enter Your Password")
});


export const userSignUpSchema = Yup.object({
  firstName: Yup.string().min(2).max(25).required("Please enter name"),
  lastName: Yup.string().min(2).max(25).required("Please enter name"),
  email: Yup.string().email().required("Please enter your email"),
  mobile: Yup.string().min(10).required("Please enter your mobile"),
  password: Yup.string().min(6).required("Please enter your password"),
  confirmPassword: Yup.string()
    .required()
    .oneOf([Yup.ref("password"), null], "Password must match"),
});


export const vendorSignUpSchema = Yup.object({
  firstName: Yup.string().min(2).max(25).required("Please enter name"),
  lastName: Yup.string().min(2).max(25).required("Please enter name"),
  experience: Yup.string().required("Please enter experience"),
  email: Yup.string().email().required("Please enter your email"),
  mobile: Yup.string().min(10).required("Please enter your mobile"),
  password: Yup.string().min(6).required("Please enter your password"),
  confirmPassword: Yup.string()
    .required()
    .oneOf([Yup.ref("password"), null], "Password must match"),
});


export const productSchema = Yup.object({
  name: Yup.string().required("Enter Product Name"),
  // category: Yup.string().required("Enter Your Category"),
  description: Yup.string().required("Enter Your Description"),
  price: Yup.string().required("Enter Price"),
});