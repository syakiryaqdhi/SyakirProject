import React from 'react';
import {View,Text,Image} from 'react-native';

const ButtonNavigation = (props) => {
    return(
      <View style={{flex:1,alignItems: 'center', justifyContent:'center'}}>
        <Image style={{width:26,height:26}} source={props.img}></Image>
         <Text style={{fontSize:10, color:'#545454', marginTop:5 }}>{props.title}</Text>
      </View>
    )
  }

export default ButtonNavigation;