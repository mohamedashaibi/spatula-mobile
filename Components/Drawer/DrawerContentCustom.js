import React from 'react';
import {View, StyleSheet, Dimensions, TouchableOpacity} from 'react-native';

import {
    DrawerContentScrollView, DrawerItem
} from '@react-navigation/drawer'
import {
    Avatar,
    Title,
    Caption,
    Paragraph,
    Drawer, 
    Text,
    TouchableRipple,
     Switch
} from 'react-native-paper'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { useSelector, useDispatch } from 'react-redux';
import Copyright from '../ComponentsReal/Copyright';
import {Logout} from '../../Redux/Actions/Auth/actions'

export function DrawerContent(props){

    const dispatch = useDispatch()

    const selector = useSelector(state=> state.auth)
    return (
        <View style={{flex:1, backgroundColor: 'white'}}>
            <DrawerContentScrollView  {...props}>
                <View style={styles.drawerContent}>
                    <View style={styles.userInfoSection}>
                        <View style={{flexDirection:'column', justifyContent: 'center',
                        textAlign: 'center',marginTop: 15}}>
                            <Avatar.Image 
                                source={{
                                    uri: 'https://api.adorable.io/avatars/50/abott@adorable.png'
                                }}
                                size={100}
                                style={{ alignSelf: 'center' }}
                            />
                            <View style={{marginLeft:15, flexDirection:'column'}}>
                                <Title style={styles.title}>
                                    {selector.auth.user.firstName} {selector.auth.user.lastName}
                                </Title>
                                <Title style={{ fontFamily: 'Amiri-Bold', textAlign: 'center', paddingBottom: 20 }}>
                                    عضو/ة منذ 23/6/2021
                                </Title>
                            </View>
                        </View>

                    </View>
                    <View style={{ width: Dimensions.get('screen').width, height: 1, borderWidth: 1, borderColor: 'grey' }}></View>
                    <Drawer.Section style={styles.drawerSection}>
                        <TouchableOpacity style={styles.drawerItem}
                        onPress={() => {props.navigation.navigate('Home')}}
                        >
                        <DrawerItem
                            icon={({color, size}) => (
                                <Icon 
                                name="home-outline" 
                                color={color}
                                size={size}
                                />
                            )}
                            label=""
                            
                        />
                        <Text style={styles.drawerItemText}>الرئيسية</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.drawerItem}
                            onPress={() => {props.navigation.navigate('Profile')}}                        
                        >
                        <DrawerItem 
                            icon={({color, size}) => (
                                <Icon 
                                name="account-outline" 
                                color={color}
                                size={size}
                                />
                            )}
                            label=""
                        />
                        <Text style={styles.drawerItemText}>الملف الشخصي</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.drawerItem}
                            onPress={() => {props.navigation.navigate('FreeCourses')}}
                        
                        >

                        <DrawerItem 
                            icon={({color, size}) => (
                                <Icon 
                                name="book" 
                                color={color}
                                size={size}
                                style={{ direction: 'rtl' }}
                                />
                            )}
                            label=""
                        />
                        <Text style={styles.drawerItemText}>الكورسات المجانية</Text>
                        </TouchableOpacity>
                        <TouchableOpacity  style={styles.drawerItem}
                            onPress={() => {props.navigation.navigate('PaidCourses')}}
                        
                        >
                        <DrawerItem 
                            icon={({color, size}) => (
                                <Icon 
                                name="book" 
                                color={color}
                                size={size}
                                />
                            )}
                            label=""
                        />
                        <Text style={styles.drawerItemText}>الكورسات المدفوعة</Text>
                        </TouchableOpacity>
                        <TouchableOpacity  style={styles.drawerItem}
                            onPress={() => {props.navigation.navigate('MyCourses')}}
                        
                        >
                        <DrawerItem 
                            icon={({color, size}) => (
                                <Icon 
                                name="book" 
                                color={color}
                                size={size}
                                />
                            )}
                            label=""
                        />
                        <Text style={styles.drawerItemText}>كورساتي</Text>
                        </TouchableOpacity>
                        <TouchableOpacity  style={styles.drawerItem}
                            onPress={() => {dispatch(Logout())}}
                        
                        >
                        <DrawerItem 
                            icon={({color, size}) => (
                                <Icon 
                                name="logout" 
                                color={color}
                                size={size}
                                />
                            )}
                            label=""
                        />
                        <Text style={styles.drawerItemText}>تسجيل الخروج</Text>
                        </TouchableOpacity>

                    </Drawer.Section>
                </View>
            </DrawerContentScrollView>
           <Copyright/>
        </View>
    )
}


const styles = StyleSheet.create({
    drawerContent: {
      flex: 1,
    },
    userInfoSection: {
        textAlign: 'center',
      paddingLeft: 20,
    },
    title: {
        textAlign: 'center',
      fontSize: 16,
      marginTop: 3,
      fontWeight: 'bold',
    },
    caption: {
        textAlign: 'center',
      fontSize: 14,
      lineHeight: 14,
    },
    row: {
      marginTop: 20,
      flexDirection: 'row-reverse',
      alignItems: 'center',
    },
    section: {
      flexDirection: 'row-reverse',
      alignItems: 'center',
      marginRight: 15,
    },
    paragraph: {
      fontWeight: 'bold',
      marginRight: 3,
    },
    drawerSection: {
      marginTop: 15,
      direction: 'rtl',
      display: 'flex',
      flexDirection: 'column'
    },
    bottomDrawerSection: {
        marginBottom: 15,
        borderTopColor: '#f4f4f4',
        borderTopWidth: 1
    },
    preference: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      paddingVertical: 12,
      paddingHorizontal: 16,
    },
    drawerItem:{
        width: Dimensions.get('screen').width/3 *2.6,
        display:'flex',
        textAlign: 'justify',
        flexDirection: 'row-reverse',
        alignItems: 'center',
        
    },
    drawerItemText:{
        fontFamily: 'Amiri-Bold',
        fontSize: 20
    }
  });