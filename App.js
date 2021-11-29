import React from 'react';
import { View, StyleSheet } from 'react-native';
import Constants from 'expo-constants';
import {
  Text, NativeBaseProvider, Box, ScrollView, extendTheme
} from 'native-base'
import { Provider as PaperProvider } from 'react-native-paper'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import AsyncStorage from '@react-native-async-storage/async-storage'

import Bottombar from './components/Bottombar'

import HomeScreen from './routes/Home'
import ProfileScreen from './routes/Profile'
import ShowPost from './routes/ShowPost'
import Login from './routes/Login'
import SearchScreen from './routes/Search'

import ctx, {VALUE} from './ctx'

const Stack = createNativeStackNavigator()

const config = {
  useSystemColorMode: false,
  initialColorMode: 'dark',
};
const customTheme = extendTheme({ config });

export default class App extends React.Component{
  constructor(props){
    super(props)
    this.state = {
      ...VALUE,
      set: (data) => this.setState(data)
    }
  }
  componentDidMount(){
    let checkUser = async () => {
      const value = await AsyncStorage.getItem('@user')
      if(value){
        this.setState({
          auth: JSON.parse(value)
        })
      }
    }
    
    checkUser()
  }
  render(){
    return(
      <View style={styles.container}>
        <PaperProvider>
          <ctx.Provider value={this.state}>
            <NativeBaseProvider theme={customTheme}>
            {
              this.state.auth ?
                <NavigationContainer>
                  <Stack.Navigator screenOptions={{
                    headerShown: false
                  }}>
                    <Stack.Screen name="Home" component={HomeScreen} />
                    <Stack.Screen name="Profile" component={ProfileScreen} />
                    <Stack.Screen name="Search" component={SearchScreen} />
                    <Stack.Screen
                      name="UserProfile"
                      component={ProfileScreen}
                      initialParams={{id: 1}}
                    />
                    <Stack.Screen
                      name="ShowPost"
                      component={ShowPost}
                      initialParams={{id: 1}}
                    />
                  </Stack.Navigator>
                  <Bottombar/>
                </NavigationContainer>
              : <NavigationContainer>
                <Stack.Navigator screenOptions={{
                  headerShown: false
                }}>
                  <Stack.Screen name="Home" component={Login} />
                </Stack.Navigator>
              </NavigationContainer>
            }
            </NativeBaseProvider>
          </ctx.Provider>
        </PaperProvider>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingTop: Constants.statusBarHeight,
    backgroundColor: 'black'
  }
});
