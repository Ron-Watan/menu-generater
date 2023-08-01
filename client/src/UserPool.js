import { CognitoUserPool } from 'amazon-cognito-identity-js'


// AWSCognito.config.region = 'us-west-1';

const  poolData = {
    UserPoolId : 'us-west-1_lmMYcjfH6',
    ClientId : '2j1e3apf787h6e1trgao5jak8m' 
};

// const  userPool = new AWSCognito.CognitoIdentityServiceProvider.CognitoUserPool(poolData);

export default new CognitoUserPool(poolData)

// var userPool = new AWSCognito.CognitoIdentityServiceProvider.CognitoUserPool(poolData);
// var userData = {
//     Username : '...', // your username here
//     Pool : userPool
// };