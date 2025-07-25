'use client';
import { useState } from 'react';
// yup
import * as Yup from 'yup';
// next
import { useSearchParams } from 'next/navigation';
import { useRouter } from 'next-nprogress-bar';
import RouterLink from 'next/link';
// formik
import { useFormik, Form, FormikProvider } from 'formik';
// toast
import { toast } from 'react-hot-toast';
// redux
import { useDispatch } from 'react-redux';
import { setLogin } from 'src/lib/redux/slices/user';
// api
import { useMutation } from 'react-query';
import * as api from 'src/services';

// mui
import { Stack, TextField, IconButton, InputAdornment, MenuItem, Typography, Link } from '@mui/material';
import { LoadingButton } from '@mui/lab';

// icons
import { MdOutlineVisibility } from 'react-icons/md';
import { MdOutlineVisibilityOff } from 'react-icons/md';
import { IoMdMale } from 'react-icons/io';
import { IoMdMail } from 'react-icons/io';
import { MdLock } from 'react-icons/md';
import { IoMdFemale } from 'react-icons/io';
import { IoPerson } from 'react-icons/io5';
import { MdLocalPhone } from 'react-icons/md';
import { createCookies } from 'src/hooks/cookies';
import { FaTransgender } from 'react-icons/fa6';

export default function ContactForm() {
  const router = useRouter();
  const searchParam = useSearchParams();
  const redirect = searchParam.get('redirect');
  const dispatch = useDispatch();
  const [loading, setloading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const phoneRegExp =
    /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;
  const RegisterSchema = Yup.object().shape({
    firstName: Yup.string().max(50, 'Too long!').required('First name is required'),
    lastName: Yup.string().max(50, 'Too long!').required('Last name is required'),
    email: Yup.string().email('Enter valid email').required('Email is required'),
    phone: Yup.string().matches(phoneRegExp, 'Phone number is not valid').required('Phone number is required'),
    password: Yup.string().required('Password is required').min(8, 'Password should be 8 characters or longer.')
  });
  const formik = useFormik({
    initialValues: {
      firstName: '',
      lastName: '',
      phone: '',
      gender: 'male',
      email: '',
      password: ''
    },
    validationSchema: RegisterSchema,
    onSubmit: async (values) => {
      setloading(true);
      await mutate({
        ...values
      });
    }
  });
  const { mutate } = useMutation(api.register, {
    onSuccess: async (data) => {
      dispatch(setLogin(data.user));
      await createCookies('token', data.token);
      toast.success('OTP sent to your email' + ' ' + data.user.firstName);
      setloading(false);
      router.push(redirect ? `/auth/verify-otp?redirect=${redirect}` : `/auth/verify-otp`);
    },
    onError: (err) => {
      const message = JSON.stringify(err.response.data.message);
      toast.error(message ? JSON.parse(message) : 'Something went wrong!');
      setloading(false);
    }
  });
  const { errors, touched, handleSubmit, values, getFieldProps } = formik;
  return (
    <FormikProvider value={formik}>
      <Form autoComplete="off" noValidate onSubmit={handleSubmit}>
        <Stack spacing={3}>
          <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2}>
            <Stack gap={0.5} width={1}>
              <Typography variant="overline" color="text.primary" htmlFor="firstName" component={'label'}>
                Full Name
              </Typography>
              <TextField
                id="firstName"
                fullWidth
                type="text"
                {...getFieldProps('firstName')}
                error={Boolean(touched.firstName && errors.firstName)}
                helperText={touched.firstName && errors.firstName}
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <IoPerson size={24} />
                    </InputAdornment>
                  )
                }}
              />
            </Stack>
            <Stack gap={0.5} width={1}>
              <Typography variant="overline" color="text.primary" htmlFor="email" component={'label'}>
                Email
              </Typography>
              <TextField
                fullWidth
                id="email"
                type="text"
                {...getFieldProps('email')}
                error={Boolean(touched.email && errors.email)}
                helperText={touched.email && errors.email}
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <IoMdMail size={24} />
                    </InputAdornment>
                  )
                }}
              />
            </Stack>
          </Stack>
          <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2}>
            <Stack gap={0.5} width={1}>
              <Typography variant="overline" color="text.primary" htmlFor="gender" component={'label'}>
                Gender
              </Typography>
              <TextField
                id="gender"
                select
                fullWidth
                {...getFieldProps('gender')}
                error={Boolean(touched.gender && errors.gender)}
                helperText={touched.gender && errors.gender}
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      {values.gender === 'male' ? (
                        <IoMdMale size={24} />
                      ) : values.gender === 'female' ? (
                        <IoMdFemale size={24} />
                      ) : (
                        <FaTransgender />
                      )}
                    </InputAdornment>
                  )
                }}
              >
                {['Male', 'Female', 'Other'].map((option) => (
                  <MenuItem key={option} value={option.toLowerCase()}>
                    {option}
                  </MenuItem>
                ))}
              </TextField>
            </Stack>
            <Stack gap={0.5} width={1}>
              <Typography variant="overline" color="text.primary" htmlFor="phone" component={'label'}>
                Phone
              </Typography>
              <TextField
                fullWidth
                id="phone"
                type="text"
                {...getFieldProps('phone')}
                error={Boolean(touched.phone && errors.phone)}
                helperText={touched.phone && errors.phone}
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <MdLocalPhone size={24} />
                    </InputAdornment>
                  )
                }}
              />
            </Stack>
          </Stack>
          <Stack gap={0.5} width={1}>
            <Typography variant="overline" color="text.primary" htmlFor="email" component={'label'}>
              Message
            </Typography>
            <TextField
              id="email"
              fullWidth
              autoComplete="username"
              type="email"
              {...getFieldProps('email')}
              error={Boolean(touched.email && errors.email)}
              helperText={touched.email && errors.email}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <IoMdMail size={24} />
                  </InputAdornment>
                )
              }}
            />
          </Stack>
          

          <LoadingButton fullWidth size="large" type="submit" variant="contained" loading={loading}>
            Submit
          </LoadingButton>
        </Stack>

        
    
      </Form>
    </FormikProvider>
  );
}
