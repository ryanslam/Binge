import 'react-native-gesture-handler';
import React from 'react';
import { 
  StyleSheet
} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import Profile from './screens/Profile';
import Home from './screens/Home';

// import Navigator from './routes/homeStack';

// const RootStack = createStackNavigator({
//   Home: Home,
//   Profile: Profile,
// })

export default class App extends React.Component {

  render() {
    return (
      <LinearGradient
          // <LinearGradient colors={['rgba(10,38,62)',,}>
          colors={['rgba(10,38,62,0.8)', 'rgba(35,69,114,0.8)', 'rgba(72,107,152,0.8)', 'rgba(152,136,184,0.8)', 'rgba(255,255,255,0.95)']}
          style={styles.container}>
              <Profile />
        </LinearGradient>
    )
  }
}

const styles = StyleSheet.create({  
  container: {
    flex: 1,
    alignItems: 'stretch',
    justifyContent: 'center',
  },
  paragraph: {
    textAlign: 'center',
    fontWeight: 'bold',
    color: '#32527f',
    fontSize: 18,
  },
});