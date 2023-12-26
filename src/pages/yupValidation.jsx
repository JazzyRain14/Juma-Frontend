import * as yup from 'yup';
const yupValidation = yup.object({
    username: yup.string()
        .required('username field required')
        .min(3, 'username must be at least 3 characters long')
        .max(10, 'username must be at most 10 characters long')
        .matches(/^[a-zA-Z0-9_.-]+$/, 'Username can only contain letters, numbers, underscores, periods, and hyphens.')
    ,
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


export default yupValidation