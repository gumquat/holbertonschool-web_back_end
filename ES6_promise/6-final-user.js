import signUpUser from './4-user-promise';
import uploadPhoto from './5-photo-reject';

export default async function handleProfileSignup(
  firstName,
  lastName,
  fileName,
) {
  const status = [];
  await signUpUser(firstName, lastName)
    .then(async (data) => {
      status.push({ status: 'fulfilled', value: data });
      await uploadPhoto(fileName);
    })
    .catch((err) => {
      status.push({ status: 'rejected', value: err.toString() });
    });
  return status;
}
