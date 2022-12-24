import { RootState } from '../../../app/store';

export const profileSelector = (state: RootState) => state.userProfile.profile;