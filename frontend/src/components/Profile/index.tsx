import React from 'react';
import { TextField, Box, Avatar } from '@mui/material';
import { COLORS } from '../../colors';
import { useAppDispatch, useAppSelector } from '../../app/hooks';
import { profileSelector } from './reducer/selector';
import { Profile } from './reducer/state';
import { slice as profileApplier } from './reducer';

const Profile = () => {
  const dispatch = useAppDispatch();
  const profile = useAppSelector(profileSelector);

  const handleSetProfile = (profile: Profile) => {
    dispatch(profileApplier.actions.setProfile(profile));
  }
  return (
    <>
      <Box sx={{ border: `1px solid ${COLORS.primaryColor}`}}>

      </Box>
    </>
  )
}

export default Profile;