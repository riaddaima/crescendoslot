import React, { useEffect } from 'react';
import { TextField, Box, Avatar, Button, InputLabel, Select, MenuItem, FormControl, FormControlLabel, Switch, Typography } from '@mui/material';
import { COLORS } from '../../colors';
import { useAppDispatch, useAppSelector } from '../../app/hooks';
import { profileSelector } from './reducer/selector';
import { Profile as ProfileI } from '../../interfaces/Profile';
import useMediaQuery from "@mui/material/useMediaQuery";
import { Formik } from "formik";
import * as yup from "yup";
import { useNavigate } from 'react-router-dom';
import { profileCreate, profileUpdate, profileGet } from './reducer/thunks';

const Profile = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const profile = useAppSelector(profileSelector);

  const handleSetProfile = (profile: ProfileI) => {
    if (profile.newUser) {
      dispatch(profileCreate(profile));
    } else {
      dispatch(profileUpdate(profile));
    }
  }
  const isNonMobile = useMediaQuery("(min-width:600px)");

  useEffect(() => {
    dispatch(profileGet());
  }, [dispatch]);

  return (
    <Box m="20px" p={2} sx={{ border: `1px solid ${COLORS.primaryColor}`, transform: isNonMobile ? 'translate(82%)' : undefined }} width={isNonMobile ? '35%' : undefined}>
      <Formik
        onSubmit={handleSetProfile}
        initialValues={profile}
        validationSchema={checkoutSchema}
        enableReinitialize={true}
      >
        {({
          values,
          errors,
          touched,
          handleBlur,
          handleChange,
          handleSubmit,
        }) => (
          <form onSubmit={handleSubmit}>
            <Box
              display="grid"
              gap="30px"
              gridTemplateColumns="repeat(4, minmax(0, 1fr))"
              sx={{
                "& > div": { gridColumn: isNonMobile ? undefined : "span 4" },
              }}
            >
              <Avatar sx={{ alignSelf: 'center', justifySelf: 'center', gridColumn: "span 4", width: 56, height: 56 }} src={profile.avatar}  />
              <TextField
                fullWidth
                variant="filled"
                type="text"
                label="First Name"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.firstName}
                name="firstName"
                error={!!touched.firstName && !!errors.firstName}
                helperText={touched.firstName && errors.firstName}
                sx={{ gridColumn: "span 2" }}
                disabled
              />
              <TextField
                fullWidth
                variant="filled"
                type="text"
                label="Last Name"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.lastName}
                name="lastName"
                error={!!touched.lastName && !!errors.lastName}
                helperText={touched.lastName && errors.lastName}
                sx={{ gridColumn: "span 2" }}
                disabled
              />
              <TextField
                fullWidth
                variant="filled"
                type="text"
                label="Email"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.email}
                name="email"
                error={!!touched.email && !!errors.email}
                helperText={touched.email && errors.email}
                sx={{ gridColumn: "span 4" }}
                disabled
              />
              <TextField
                fullWidth
                variant="filled"
                type="text"
                label="Phone Number"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.phoneNumber}
                name="phoneNumber"
                error={!!touched.phoneNumber && !!errors.phoneNumber}
                helperText={touched.phoneNumber && errors.phoneNumber}
                sx={{ gridColumn: "span 4" }}
                placeholder="+212600000000"
              />
              <FormControl fullWidth sx={{ gridColumn: "span 2" }}>
                <FormControlLabel control={<Switch name='isSubbedNewsletter' onChange={handleChange} checked={values.isSubbedNewsletter} />} label="Sign up for a monthly newsletter!" />
              </FormControl>
              <TextField
                fullWidth
                variant="filled"
                type="text"
                label="Role"
                value={values?.role?.charAt(0).toUpperCase() + values?.role?.slice(1)}
                name="role"
                sx={{ gridColumn: "span 4" }}
                disabled
              />
            </Box>
            <Box display="flex" justifyContent="end" mt="20px">
              <Button type="submit" variant="contained">
                Save
              </Button>
            </Box>
          </form>
        )}
      </Formik>
    </Box>
  );
};

const phoneRegExp =
  /^((\+[1-9]{1,4}[ -]?)|(\([0-9]{2,3}\)[ -]?)|([0-9]{2,4})[ -]?)*?[0-9]{3,4}[ -]?[0-9]{3,4}$/;

const checkoutSchema = yup.object().shape({
  firstName: yup.string().required("required"),
  lastName: yup.string().required("required"),
  email: yup.string().email("invalid email").required("required"),
  phoneNumber: yup
    .string()
    .matches(phoneRegExp, "Phone number is not valid")
    .required("required"),
});

export default Profile;