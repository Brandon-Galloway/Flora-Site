/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

import * as APITypes from "../API";
type GeneratedMutation<InputType, OutputType> = string & {
  __generatedMutationInput: InputType;
  __generatedMutationOutput: OutputType;
};

export const registerDevice = /* GraphQL */ `mutation RegisterDevice($device: DeviceRegistrationInput) {
  registerDevice(device: $device) {
    DeviceId
    Nickname
    BatteryLife
    Location {
      Lat
      Long
      LocationName
      LocationKey
      __typename
    }
    __typename
  }
}
` as GeneratedMutation<
  APITypes.RegisterDeviceMutationVariables,
  APITypes.RegisterDeviceMutation
>;
export const signin = /* GraphQL */ `mutation Signin($user: AuthInput!) {
  signin(user: $user) {
    AccessToken
    IdToken
    RefreshToken
    __typename
  }
}
` as GeneratedMutation<
  APITypes.SigninMutationVariables,
  APITypes.SigninMutation
>;
