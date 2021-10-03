import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Image, ImageBackground } from 'react-native';
import AdCarousel from './Components/AdCarousel';
import LoginFacebook from './Facebooklogin';

export default function FacebookSignin() {
  return (
    <View style={styles.container}>
      <AdCarousel/>

      <ImageBackground source={ require("./bg.jpg") } resizeMode="cover" style={styles.images}>
      <Text style={styles.title}>سباتولا</Text>

      <LoginFacebook/>
        <Image style={styles.image} 
        source={require("./tenor.gif")}
        />
        <StatusBar style="dark" backgroundColor="pink"/>
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  title:{
    fontSize: 50,
    fontFamily: "Mada-Bold",
    textAlign:"center",
    color: "white",
    fontWeight: "bold"
  },
  image:{
      alignSelf: "center",
      resizeMode:"contain",
      width: 150,
  },
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  }, 
  images: {
    flex: 1,
    alignSelf: 'stretch',
    justifyContent: "space-evenly"
  }
})
