import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';



export default class App extends React.Component {
   render() {
    return (
      <View style={styles.container}>

      <View style = {styles.upbar}>
      <View>
    <Text style={styles.name}>Setting</Text>
       </View>
       </View>
     <View>
    <Text>Save</Text>
    </View>





       </View>
    );
  }
}

const styles = StyleSheet.create({

  centainer: {
  flex: 1,
  backgroundColor: '#FFF',
  alignItems: 'center',
  justifyContent: 'center'
},

  upbar : {
   position: 'absolute',
   backgroundColor:'#F0FFF0',
   top: 0,
   left:0,
   right:0,
   height:78,
   paddingTop:30,
   justifyContent: 'center',
   alignItems:'center',

 },
 name : {
   color:'#FF4500',
   fontSize: 20,


},


});
