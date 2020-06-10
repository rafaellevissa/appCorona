import React from 'react';
import { View, Image } from 'react-native';
import styles from './style.js';
import Logo from '../assets/logo.png';

export default function Home(){
    return(
        <View style={styles.container}>
            <View style={styles.header}>
                <Image source={Logo}></Image>
            </View>
        </View>
    );
}