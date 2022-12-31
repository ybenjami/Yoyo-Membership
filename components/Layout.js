import React from 'react';
import { View } from '@aws-amplify/ui-react'
import { Nav } from '../ui-components';

export default function Layout({ children, handleClick, authText, username}){
    return (
        <View width='900px' marginLeft='auto' marginRight='auto'>
            <Nav
                marginTop="20px"
                authText={authText}
                username={username}
                handleAuth={handleClick}
                avatar={username.split('')[0].toUpperCase()} />

               {children}
        </View>
    )
}