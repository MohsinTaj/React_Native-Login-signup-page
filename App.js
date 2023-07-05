// import { StatusBar } from "expo-status-bar";
// import React, { useState } from "react";
// import {
//   StyleSheet,
//   Text,
//   View,
//   Image,
//   TextInput,
//   Button,
//   TouchableOpacity,
// } from "react-native";
// import { NavigationContainer } from '@react-navigation/native';
// // import { createNativeStackNavigator } from '@react-navigation/native-stack';

// export default function App() {
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");  
 


//   return (
//     <View style={styles.container}>
//       <Image style={styles.image} source={require("./assets/logo.png")} /> 
//       <StatusBar style="auto" />
//       <View style={styles.inputView}>
//         <TextInput
//           style={styles.TextInput}
//           placeholder="Email."
//           placeholderTextColor="#003f5c"
//           onChangeText={(email) => setEmail(email)}
//         /> 
//       </View> 
//       <View style={styles.inputView}>
//         <TextInput
//           style={styles.TextInput}
//           placeholder="Password."
//           placeholderTextColor="#003f5c"
//           secureTextEntry={true}
//           onChangeText={(password) => setPassword(password)}
//         /> 
//       </View> 
//       <TouchableOpacity>
//         <Text style={styles.forgot_button}>Forgot Password?</Text> 
//       </TouchableOpacity> 
//       <TouchableOpacity style={styles.loginBtn}>
//         <Text style={styles.loginText}>LOGIN</Text> 
//       </TouchableOpacity>   
//       <TouchableOpacity style={styles.signBtn}>
//       <Button title="Sign Up" onPress={() => navigation.navigate('Home')} />
//       </TouchableOpacity> 
//     </View> 
//   );
// }
// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: "#fff",
//     alignItems: "center",
//     justifyContent: "center",
//   },
//   image: {
//       width:100,
//       height:100,
//       marginTop:10,
//       marginBottom:50,
//   },
//   inputView: {
//     backgroundColor: "#FFC0CB",
//     borderRadius: 30,
//     width: "70%",
//     height: 45,
//     marginBottom: 20,
//     alignItems: "center",
//   },
//   TextInput: {
//     height: 50,
//     flex: 1,
//     padding: 10,
//     marginLeft: 20,
    
//   },
//   forgot_button: {
//     height: 30,
//     marginBottom: 30,
//   },
//   loginBtn: {
//     width: "80%",
//     borderRadius: 25,
//     height: 50,
//     alignItems: "center",
//     justifyContent: "center",
//     marginTop: 40,
//     backgroundColor: "#FF1493",
//   },
//   signBtn: {
//     width: "80%",
//     borderRadius: 25,
//     height: 50,
//     alignItems: "center",
//     justifyContent: "center",
//     marginTop: 40,
//     backgroundColor: "#FFF",
//   },
//   signupText:{
//     color:"#FFF"
//   }
// });
import React, { useState } from 'react';
import { View, Image, StyleSheet, TouchableOpacity, Animated, Easing,Text,ImageBackground } from 'react-native';

const SpeedFanAnimation = () => {
  // const [speed, setSpeed] = useState(0);
  // const spinValue = new Animated.Value(0);

  // const startAnimation = () => {
  //   Animated.timing(spinValue, {
  //     toValue: 1,
  //     duration: 10000,
  //     easing: Easing.linear,
  //     useNativeDriver: true,
  //   }).start(() => {
  //     spinValue.setValue(0);
  //   });
  // };

  // const spin = spinValue.interpolate({
  //   inputRange: [0, 1],
  //   outputRange: ['0deg', `${speed * 600}deg`],
  // });

  return (
    
      // <ImageBackground   source={require('./assets/background.jpg')}
      // style={{width:'100%',height:'100%'}}
      // >
     <View style={styles.container}>
      {/* <View style={styles.button}> */}
      {/* <View style={styles.border}> */}
      {/* <TouchableOpacity onPress={() => setSpeed(speed + 1)}>
        <Image style={styles.Plusbutton} source={require('./assets/plus.jpg')} />
      </TouchableOpacity>
      <TouchableOpacity onPress={() => startAnimation()}>
        <Image style={styles.Playbutton} source={require('./assets/play.jpg')} />
      </TouchableOpacity>
      <TouchableOpacity onPress={() => setSpeed(speed - 1)}>
        <Image style={styles.Minusbutton} source={require('./assets/minus.jpg')} />
      </TouchableOpacity>
      </View> */}
      <Image
        style={styles.fan  }
        source={require('./assets/fan.gif')}
      />
        <Image
          style={styles.wait}
          source={require("./assets/waiting.gif")}
          resizeMode="contain"
          transform={[{ rotate: '90deg' }]}
        />
      
      {/* <Image style={styles.image} source={require("./assets/waiting.gif")} />  */}
       <Image style={styles.wifi} source={require("./assets/wifi.png")} /> 
      
       <Text>Wi-Fi</Text>
       {/* </View> */}
       </View>
    // </ImageBackground>

  );
};

const styles = StyleSheet.create({
  container: { 
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor:'grey',
    
  },
  border:{
    // width:500,
    // height:500,
    // backgroundColor:"black",
  },
  // button:{
  //   flex: 1,
  //   // justifyContent: 'center',
  //   // alignItems: '',
  // },
  // Plusbutton: {
  //   width: 50,
  //   height: 50,
  //   margin: 10,
  //   marginTop:90,
  //   marginLeft:350,
    
  // },
  // Minusbutton: {
  //   width: 50,
  //   height: 50,
  //   margin: 10,
  //   marginBottom:200,
  //   marginLeft:350,
    
  // },
  // Playbutton: {
  //   width: 50,
  //   height: 50,
  //   margin: 10,
  //   // marginBottom:200,
  //   marginLeft:350,
    
  // },
  fan: {
    marginBottom:50,
    width: 200,
    height: 200,
  },
  wait: {
          width:150,
          height:150,
          // marginTop:10,
          marginBottom:10,
      },
  wifi:{
      width:150,
      height:150,
        
      }
});

export default SpeedFanAnimation;