import React from 'react'
import {
  Box, View, Center, Input, VStack, Button, Heading
} from 'native-base'
import { StyleSheet } from 'react-native'
import AsyncStorage from '@react-native-async-storage/async-storage'
import ctx from '../ctx'

export default function Login(){
  const context = React.useContext(ctx)
  const [state, setState] = React.useState({
    email: 'example@protonmail.com', password: '11111111'
  })
  const onChange = (text, type) => {
    setState({...state, [type]: text})
  }
  const onSubmit = async () => {
    await AsyncStorage.setItem('@user', JSON.stringify(state))
    context.set({auth: state})
  }
  const email = React.useMemo(() => state.email, [state.email])
  const password = React.useMemo(() => state.password, [state.password])
  return(
    <View style={styles.container}>
      <Box p="4">
        <Box bg="muted.900" p="4">
          <VStack space={2}>
            <Center>
              <Heading size="xl" bold>Login Instagram</Heading>
            </Center>
            <Input
              onChangeText={(t) => onChange(t, 'email')}
              type="email"
              placeholder="Email"
              value={email}
            />
            <Input
              onChangeText={(t) => onChange(t, 'password')}
              type="password"
              placeholder="Password"
              value={password}
            />
            <Button onPress={() => context.set({auth: true})}>Submit</Button>
            <Button variant="outline" colorScheme="blue">
              Continue With Facebook
            </Button>
            <Center>
              Forget Password
            </Center>
          </VStack>
        </Box>
      </Box>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: 'black'
  }
})