import * as React from 'react';
import {
  View, Box, HStack, Avatar, Center
} from 'native-base'
import { Pressable } from 'react-native'
import { AntDesign, MaterialIcons, Entypo } from "@expo/vector-icons"
import { useNavigation } from '@react-navigation/native'

export default function Bottombar(){
  const navigation = useNavigation()
  return(
    <View>
      <Box bg="black" borderColor="#2b2b2b" borderTopWidth="0.5">
        <HStack justifyContent="center">
          <Pressable onPress={() => navigation.navigate('Home')}>
            <Box p="4" flex="1">
              <Center>
                <AntDesign name="home" size={24} color="white" />
              </Center>
            </Box>
          </Pressable>
          <Box p="4" flex="1">
            <Pressable onPress={() => navigation.navigate('Search')}>
              <Center>
                <AntDesign name="search1" size={24} color="white" />
              </Center>
            </Pressable>
          </Box>
          <Box p="4" flex="1">
            <Center>
              <MaterialIcons name="video-library" size={24} color="white" />
            </Center>
          </Box>
          <Box p="4" flex="1">
            <Center>
              <Entypo name="shopping-bag" size={24} color="white" />
            </Center>
          </Box>
          <Pressable onPress={() => navigation.navigate('Profile')}>
            <Box p="4" flex="1">
              <Center>
                <Avatar
                  source={{
                    uri: 'https://media.istockphoto.com/photos/smiling-indian-business-man-working-on-laptop-at-home-office-young-picture-id1307615661?b=1&k=20&m=1307615661&s=170667a&w=0&h=Zp9_27RVS_UdlIm2k8sa8PuutX9K3HTs8xdK0UfKmYk='
                  }}
                  width={25}
                  height={25}
                />
              </Center>
            </Box>
          </Pressable>
        </HStack>
      </Box>
    </View>
  )
}