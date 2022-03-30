import './App.css';
import { Button, TextField } from '@material-ui/core';
import { useFormik } from 'formik';
import * as yup from 'yup';



const validationSchema = yup.object({
    name: yup
        .string('Enter your email')
        .matches(/^[a-zA-Z]{3,}/g, 'name should be more than 3 ')
        .required('Name is required'),
    email: yup
        .string('Enter your email')
        .email('Enter a valid email')
        .required('Email is required'),
    userName: yup
        .string('Enter your email')
        .matches(/^[a-zA-Z]{3,}[!@#$&()-`.+,"]/g, 'Username should have special character (!@#$&()-`.+,) ')
        .required('Email is required'),
    password: yup
        .string('Enter your password')
        .min(8, 'Password should be of minimum 8 characters length')
        .required('Password is required'),
    repassword: yup.string()
        .oneOf([yup.ref('password'), null], 'Passwords must match')
});


export default function Register() {
  
    const formik = useFormik({
        initialValues: {
            name: '',
            email: '',
            userName:'',
            password: '',
            repassword:''

        },
        validationSchema: validationSchema,
        onSubmit: (values) => {
            alert(JSON.stringify(values, null, 5));
        },
    });

    return (
        <div className='LOG w-50 m-auto my-5'>
          <h1 className='text-center'> Register NOW</h1>
          <form onSubmit={formik.handleSubmit}>
          <TextField
              className="my-5"
              fullWidth
              id="name"
              name="name"
              label="name"
              value={formik.values.name}
              onChange={formik.handleChange}
              error={formik.touched.name && Boolean(formik.errors.name)}
              helperText={formik.touched.name && formik.errors.name}
            />
            <TextField
              className="my-5"
              fullWidth
              id="email"
              name="email"
              label="Email"
              value={formik.values.email}
              onChange={formik.handleChange}
              error={formik.touched.email && Boolean(formik.errors.email)}
              helperText={formik.touched.email && formik.errors.email}
            />
             <TextField
              className="my-5"
              fullWidth
              id="userName"
              name="userName"
              label="userName"
              value={formik.values.userName}
              onChange={formik.handleChange}
              error={formik.touched.userName && Boolean(formik.errors.userName)}
              helperText={formik.touched.userName && formik.errors.userName}
            />
            <TextField
              className="my-5 h3"
              fullWidth
              id="password"
              name="password"
              label="Password"
              type="password"
              value={formik.values.password}
              onChange={formik.handleChange}
              error={formik.touched.password && Boolean(formik.errors.password)}
              helperText={formik.touched.password && formik.errors.password}
            />
            <TextField
              className="my-5 h3"
              fullWidth
              id="repassword"
              name="repassword"
              label="repassword"
              type="password"
              value={formik.values.repassword}
              onChange={formik.handleChange}
              error={formik.touched.repassword && Boolean(formik.errors.repassword)}
              helperText={formik.touched.repassword && formik.errors.repassword}
            />
            <div className='butt d-flex '>
              <Button className='bttn w-25 my-5' variant="contained" fullWidth type="submit">
               register
              </Button>
            </div>
          </form>
        </div>
      );
}