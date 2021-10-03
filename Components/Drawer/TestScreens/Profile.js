import React from 'react';
import {useSelector} from 'react-redux'
import { View, Text, Button } from "react-native";

export default function ProfileScreen(props) {

    const state = useSelector(state => state.auth)

    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text style={{fontSize:16,fontWeight:'700'}}>Profile Screen</Text>
        {console.log("auth="+ JSON.stringify(state))}
      </View>
    );
  }