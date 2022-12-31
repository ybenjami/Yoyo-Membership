import React from "react";
import { Flex, View } from "@aws-amplify/ui-react";
import { Footer, Hero, Persuade, Testimonies,PromoCollection } from "../ui-components";
import { useRouter } from 'next/router';

import { loadStripe } from "@stripe/stripe-js";

import Layout from "../components/Layout";
function index() {
  const router = useRouter()

  async function handleClick(){
    const stripe = await loadStripe("pk_test_51MKXSvGMWWGqI0NHyqosCnS5Ml70JQqYxzdgfykBT7P15oAjcg2EhRs17xtQU3AqoE0WKt0BiHcbTtkbsSRE4RtH00bQjZcnSp");

    const { error } = await stripe?.redirectToCheckout({
      lineItems: [{ price: "price_1MKXt1GMWWGqI0NH1WiZmMns", quantity: 1}],
      mode: "subscription",
      successUrl: "http://localhost:3000/post",
      cancelUrl: "http://localhost:3000/cancel"
    })
    console.log(error);
  }
  return (
    <Layout handleClick={() => {router.push('/posts')}} authText="Sign Up" username="none">
      <View marginBottom="135px">
        <Hero handleClick={handleClick} />
      </View>
      <View>
        <Testimonies />
      </View>
      <View justifyContent={"center"}>
        <PromoCollection />
      </View>
      <Flex justifyContent={"center"}>
        <Persuade banner="https://i.imgur.com/MxbD3N4.png" />
      </Flex>
      <View marginTop="50px" marginBottom="50px">
        <Footer />
      </View>
    </Layout>
  );
}
export default index;