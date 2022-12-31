/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import { Flex, Image, Text } from "@aws-amplify/ui-react";
export default function Promo(props) {
  const { image, Title, description, promo, overrides, ...rest } = props;
  return (
    <Flex
      gap="16px"
      direction="column"
      width="380px"
      height="unset"
      justifyContent="flex-start"
      alignItems="center"
      position="relative"
      borderRadius="12px"
      padding="45px 12px 45px 12px"
      backgroundColor="rgba(17,35,49,1)"
      {...rest}
      {...getOverrideProps(overrides, "Promo")}
    >
      <Image
        width="336px"
        height="195px"
        display="block"
        gap="unset"
        alignItems="unset"
        justifyContent="unset"
        shrink="0"
        position="relative"
        padding="0px 0px 0px 0px"
        opacity="0.699999988079071"
        objectFit="cover"
        src={promo?.image}
        {...getOverrideProps(overrides, "Banner")}
      ></Image>
      <Text
        fontFamily="Inter"
        fontSize="20px"
        fontWeight="700"
        color="rgba(255,255,255,1)"
        lineHeight="25px"
        textAlign="center"
        display="block"
        direction="column"
        justifyContent="unset"
        width="316px"
        height="52.77px"
        gap="unset"
        alignItems="unset"
        shrink="0"
        position="relative"
        padding="0px 0px 0px 0px"
        whiteSpace="pre-wrap"
        children={promo?.title}
        {...getOverrideProps(overrides, "Title")}
      ></Text>
      <Text
        fontFamily="Inter"
        fontSize="16px"
        fontWeight="400"
        color="rgba(194,202,209,1)"
        lineHeight="24px"
        textAlign="left"
        display="block"
        direction="column"
        justifyContent="unset"
        letterSpacing="0.01px"
        width="339px"
        height="355px"
        gap="unset"
        alignItems="unset"
        shrink="0"
        position="relative"
        padding="0px 0px 0px 0px"
        whiteSpace="pre-wrap"
        children={promo?.body}
        {...getOverrideProps(overrides, "Description")}
      ></Text>
    </Flex>
  );
}
