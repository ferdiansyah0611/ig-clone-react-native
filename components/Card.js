import React from 'react';
import { Pressable } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import {
  View, Box, Image, HStack, Text, Avatar, Center
} from 'native-base'
import { AntDesign, FontAwesome5, Feather, Entypo } from '@expo/vector-icons'; 

const { useState } = React

export default function Card({data}){
  const navigate = useNavigation()
  const [liked, setliked] = useState(false)
  const [saved, setsaved] = useState(false)
  const showPost = () => {
    navigate.navigate('ShowPost', {
      id: data.id,
    })
  }
  return(
    <View>
      <Box borderColor="#2b2b2b" borderTopWidth="0.3" pt="2" bg="black" _text={{color: 'white'}}>
        <HStack>
          <Pressable onPress={showPost}>
            <Avatar
              source={{
                uri: 'https://media.istockphoto.com/photos/smiling-indian-business-man-working-on-laptop-at-home-office-young-picture-id1307615661?b=1&k=20&m=1307615661&s=170667a&w=0&h=Zp9_27RVS_UdlIm2k8sa8PuutX9K3HTs8xdK0UfKmYk='
              }}
              width={35}
              height={35}
              ml={2}
            />
          </Pressable>
            <Center _text={{color: 'white', fontWeight: 'bold', marginLeft: 2, fontSize: 16}}>Ferdiansyah</Center>
          <Box flex="1"></Box>
          <Center mr="2">
            <Entypo name="dots-three-vertical" size={24} color="white" />
          </Center>
        </HStack>
        <Image
          source={{
            uri: data.src
          }}
          width="100%"
          height={400}
          mt={2}
        />
        <HStack>
          <Pressable onPress={() => setliked(!liked)}>
            <Box p="2">
              <AntDesign name={liked ? "heart":"hearto"} size={24} color={liked ? "red":"white"} />
            </Box>
          </Pressable>
          <Box p="2">
            <FontAwesome5 Feather name="comment" size={24} color="white" />
          </Box>
          <Box flex="1" p="2">
            <Feather name="send" size={24} color="white" />
          </Box>
          <Pressable onPress={() => setsaved(!saved)}>
            <Box p="2">
              <Feather name="bookmark" size={24} color={saved ? "blue":"white"} />
            </Box>
          </Pressable>
        </HStack>
        <HStack>
          <Box p="2">
            <Text style={{color: 'white'}}>
              <Text bold>Ferdiansyah</Text> - Lorem Ipsum is simply dummy text of the
              printing and typesetting industry. Lorem Ipsum has been the industry's
              standard dummy text
              ever since the 1500s.
              #testing
            </Text>
          </Box>
        </HStack>
      </Box>
    </View>
  )
}