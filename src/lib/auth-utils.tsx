import { Amplify } from 'aws-amplify';
import { signIn, type SignInInput, getCurrentUser, fetchAuthSession, signOut } from 'aws-amplify/auth';
import config from '../amplifyconfiguration.json'

Amplify.configure(config)

export async function handleSignIn() {
  try {
    const currentUser = await getCurrentSession();
    if (currentUser == undefined) {
      console.log("No user session found. Authenticating");
      const params: SignInInput = {
        username: process.env.ADMIN_USERNAME ?? '',
        password: process.env.ADMIN_PASSWORD ?? '',
      }
      const { isSignedIn, nextStep } = await signIn(params);
    }
  } catch (error) {
    console.log('error signing in', error);
  }
}

export async function getCurrentSession() {
  try {
    const tokens = (await fetchAuthSession()).tokens
    const { username, userId, signInDetails } = await getCurrentUser();
    if(tokens != undefined) {
      return {
        userId: userId,
        username: username,
        accessToken: tokens.accessToken,
        idToken: tokens.idToken,
        signInDetails: signInDetails
      }
    }
  } catch (err) {
    console.log(err);
  }
}