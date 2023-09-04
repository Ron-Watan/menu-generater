import { CognitoUserPool } from 'amazon-cognito-identity-js'


// AWSCognito.config.region = 'us-west-1';
// REACT_APP_REGION = 'us-west-1'
// REACT_APP_IDENTITY_POOL_ID = 'us-west-1:1cd000f1-2843-4085-b6ad-f059f5c4164c'
// REACT_APP_USER_POOL_ID = 'us-west-1_lmMYcjfH6'
const poolData = {
    UserPoolId: process.env.REACT_APP_USER_POOL_ID,
    ClientId: process.env.REACT_APP_CLIENT_ID
};

// const  userPool = new AWSCognito.CognitoIdentityServiceProvider.CognitoUserPool(poolData);

export default new CognitoUserPool(poolData)

// var userPool = new AWSCognito.CognitoIdentityServiceProvider.CognitoUserPool(poolData);
// var userData = {
//     Username : '...', // your username here
//     Pool : userPool
// };