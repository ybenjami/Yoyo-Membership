import React from "react";
import { Heading, Text, View, Authenticator, useTheme,Flex } from "@aws-amplify/ui-react";
import Layout from "../components/Layout";
import { Footer, Stories, Logo } from "../ui-components";



const authComponents={
  Header() {
    const { tokens } = useTheme();
    return (
      <Flex
        justifyContent={'center'}
        direction='column'
        paddingTop={tokens.space.xxxl}
        paddingBottom={tokens.space.xxl}
        >

        <Logo/>
        </Flex>
    );
  },
}

function Post() {
  return (
    <Authenticator components={authComponents} hideSignUp={true}>
      {({signOut, user}) => (
        <Layout
          handleClick={() => signOut()}
          authText="Sign Out"
          username={user.attributes?.email.split("@")[0]}
      >
        <View marginTop="50px" marginBottom="30px">
          <Heading level={2}>Welcome to our backstage</Heading>
          <Text marginTop="20px">
            Discover stories,thinking, and expertise from writers on any top{" "}
          </Text>
        </View>
        <Stories />
        <View marginTop="50px" marginBottom="50px">
          <Footer />
        </View>
      </Layout>
      )}
    
    </Authenticator>
  );
}
export default Post;