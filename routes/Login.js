import React from 'react'
import {
  Box, View, Center, Input, VStack, Button
} from 'native-base'
import {
  Card
} from 'react-native-paper'
import { StyleSheet } from 'react-native'
import ctx from '../ctx'

export default function Login(){
  const context = React.useContext(ctx)
  return(
    <View style={styles.container}>
      <Box p="4">
        <Card>
          <Card.Content>
            <VStack space={2}>
              <Center _text={{color: 'black', fontWeight: 'bold', fontSize: 28}}>Login Instagram</Center>
              <Input type="email" placeholder="Email" />
              <Input type="password" placeholder="Password" />
              <Button onPress={() => context.set({auth: true})}>Submit</Button>
              <Button variant="outline" colorScheme="blue">
                Continue With Facebook
              </Button>
              <Center>
                Forget Password
              </Center>
            </VStack>
          </Card.Content>
        </Card>
      </Box>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    //backgroundColor: 'black'
  }
})