import React, { useEffect } from 'react'
import { Dimensions, Pressable } from 'react-native'
import Card from '../components/Card'
import {
  ScrollView, Box, Avatar, Text, HStack, Center, Button, Image, VStack
} from 'native-base'
import { StyleSheet, View } from 'react-native'
import { useNavigation } from '@react-navigation/native'

import ctx from '../ctx'

import Appbar from '../components/Appbar'
import GridPost from '../components/GridPost'

const WHITE = {color: 'white'}
var {width} = Dimensions.get('window');

export default function Profile({route}){
  const context = React.useContext(ctx)
  const { id } = route.params?route.params: {}
  return(
    <>
      <Appbar menu/>
      <ScrollView style={styles.container}>
        <Box bg="black" pb="2">
          <HStack>
            <Box p="2">
              <Avatar
                source={{
                  uri: 'https://media.istockphoto.com/photos/smiling-indian-business-man-working-on-laptop-at-home-office-young-picture-id1307615661?b=1&k=20&m=1307615661&s=170667a&w=0&h=Zp9_27RVS_UdlIm2k8sa8PuutX9K3HTs8xdK0UfKmYk='
                }}
                width={50}
                height={50}
              />
            </Box>
            <Center flex="1">
              <Text style={WHITE}>
                {context.post.length}
              </Text>
              <Text style={WHITE}>Post</Text>
            </Center>
            <Center flex="1">
              <Text style={WHITE}>
                1M
              </Text>
              <Text style={WHITE}>Followers</Text>
            </Center>
            <Center flex="1">
              <Text style={WHITE}>
                10
              </Text>
              <Text style={WHITE}>Following</Text>
            </Center>
          </HStack>
          <HStack>
            <Box p="2">
              <Text style={WHITE}>Ferdiansyah 0611</Text>
              <Text style={{color: '#eeeeee'}}>Public Figure</Text>
              <Text style={WHITE}>
                My Dreams Build The Startup
              </Text>
            </Box>
          </HStack>
          <HStack>
            <Button flex="1" variant="ghost" colorScheme="blue">Edit Profile</Button>
            <Button flex="1" variant="ghost" colorScheme="blue">Promotions</Button>
            <Button flex="1" variant="ghost" colorScheme="blue">Insights</Button>
          </HStack>
        </Box>
        <GridPost post={context.post}/>
      </ScrollView>
    </>
  )
}
const styles = StyleSheet.create({
  gridView: {
    flex: 1,
  },
  container: {
    backgroundColor: 'black'
  }
});