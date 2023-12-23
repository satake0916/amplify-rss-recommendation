import NextAuth from 'next-auth';
import CognitoProvider from "next-auth/providers/cognito"

export default NextAuth({
  providers: [
    CognitoProvider({
      clientId:process.env.CLIENT_ID,
      clientSecret:proceess.env.CLIENT_SECRET,
      issuer:"https://cognito-idp.ap-northeast-1.amazonaws.com/" + process.env.USER_POOL_ID,
    })
  ]
})
