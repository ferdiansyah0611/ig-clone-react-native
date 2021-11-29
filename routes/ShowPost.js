import React from 'react'
import { StyleSheet } from 'react-native'
import Card from '../components/Card'
import {
  ScrollView, Text, Input, Box, VStack, HStack, Avatar, Center, View,
  Heading, IconButton, Icon
} from 'native-base'
import { TextInput } from 'react-native-paper'
import { Feather } from "@expo/vector-icons"

import ctx from '../ctx'

const TEXT = "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."

export default function ShowPost({route}){
  const context = React.useContext(ctx)
  const [comment, setComment] = React.useState([])
  const [input, setInput] = React.useState('')
  React.useEffect(() => {
    setComment([
      {text: TEXT},
      {text: TEXT},
      {text: TEXT},
      {text: TEXT},
      {text: TEXT}
    ])
    return() => {
      setComment([])
    }
  }, [])
  return(
    <>
      <ScrollView style={styles.container}>
        <Card data={context.post.find(d => d.id === route.params.id)} />
        <Box borderColor="#2b2b2b" borderTopWidth="0.3">
          <Box p="2">
            <Heading>Comment</Heading>
          </Box>
          {
            comment.map((data, i) => (
              <VStack>
                <Box p="2">
                  <HStack>
                    <Avatar
                      source={{
                        uri: 'https://media.istockphoto.com/photos/smiling-indian-business-man-working-on-laptop-at-home-office-young-picture-id1307615661?b=1&k=20&m=1307615661&s=170667a&w=0&h=Zp9_27RVS_UdlIm2k8sa8PuutX9K3HTs8xdK0UfKmYk='
                      }}
                      width={50}
                      height={50}
                    />
                    <Center _text={{color: 'white', fontWeight: 'bold', marginLeft: 2}}>ferdiansyah</Center>
                  </HStack>
                  <Box py="2">
                    <Text style={styles.white}>{data.text}</Text>
                  </Box>
                </Box>
              </VStack>
            ))
          }
        </Box>
      </ScrollView>
      <View style={styles.container}>
        <Box p="2">
          <HStack>
            <Box flex="1">
              <Input value={input} onChangeText={setInput} placeholder="Type Here"/>
            </Box>
            <IconButton
              onPress={() => {
                setComment([{text: input}, ...comment])
                setInput('')
              }}
              icon={<Icon as={Feather} name="send" />}
            />
          </HStack>
        </Box>
      </View>
    </>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'black',
  },
  white: {
    color: 'white'
  }
});