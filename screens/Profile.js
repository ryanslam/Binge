import React from 'react';
import { 
    StyleSheet,
    Text, 
    View, 
    Button,
    ScrollView,
    Image,
    TouchableHighlight,
    ImageBackground,
 } from 'react-native';

 let userName = 'Michelle Lim'
 let userLocation = 'Fremont, CA'
export default class Profile extends React.Component {
  render() {
    return (
        <View style={{flex:1}}>
          {/* <ImageBackground source={require('../assets/foods/2.jpg')} style={styles.backgroundImage}> */}
        <View style={{height:60}}>
        
        </View>
        <View style={{alignItems:'center', justifyContent: 'center', margin:20}}>
        
            <TouchableHighlight>
              <Image
                  source={require('../assets/users/userDefault.jpg')}
                  style={styles.image} />
            </TouchableHighlight>
            
          <Text style={styles.nameText}>{userName}</Text>
          <Text style={styles.subText}>{userLocation}</Text>
          </View>
          
        <View style={styles.container}>
          <View style={styles.buttonBar}>
            <Text>Buttons will go in here</Text>
          </View>
          <ScrollView>  
            <View style={{flex:1, justifyContent:'center', alignItems:'center', margin: 50}}>
              <Text>More info or saved recipes will go in here</Text>
            </View>
          </ScrollView>
          
        </View>
        
        <View style={{height:60}}>

        </View>
        {/* </ImageBackground> */}
      </View>
    );
  }
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      flexDirection: 'column',
      backgroundColor: '#fff',
      borderRadius: 10,
    },  
    buttonBar:{
      height:80, 
      backgroundColor:'lightgrey',
      justifyContent:'center', 
      alignItems:'center', 
      borderTopStartRadius: 10,
      borderTopEndRadius: 10,
    },
    // backgroundImage: {
    //   flex: 1,
    //   justifyContent: "center"
    // },
    image: {
      width: 125,
      height: 125,
      borderRadius: 125 / 2,
      overflow: "hidden",
      borderWidth: 2,
      borderColor: "grey",
      margin: 15,
    },
    nameText:{
      fontSize: 25,
      color: 'white',
      fontWeight: 'bold',
      fontFamily: 'Arial',
    },
    subText:{
      fontSize: 18,
      color: 'darkgrey',
      fontFamily: 'Arial',
    }
  });
  