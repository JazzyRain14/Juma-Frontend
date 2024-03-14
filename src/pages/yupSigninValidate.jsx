import * as yup from "yup"

const yupSigninValidate = yup.object({
    email: yup.string()
    .required('email field required')
    .email('Please enter a valid email')
    .notOneOf(['example.com', 'otherdomain.org'], 'This domain is not allowed')
    ,
    password: yup.string()
        .required('password field required')
        .min(12, 'Password must be at least 12 characters long')
        .max(64, 'Password must be at most 64 characters long')
        .matches(/[a-z]/, 'Password must be at least one lowercase letter')
        .matches(/[A-Z]/, 'Password must be at least one uppercase letter')
        .matches(/\d/, 'Password must be at least one number')
        .matches(/[!@#$%^&*()_+\-=\[\]{};:]/, 'Password must contain at least one special character')
        .notOneOf(['"', "'", '<', '>', '\\', ' '], 'Password cannot contain spaces or special characters: " \' < > \\')
});

export default yupSigninValidate