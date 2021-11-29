import * as React from 'react';
import {
  View, Box, Flex, Text, Center, Icon,
  HamburgerIcon,
  Button, Actionsheet, useDisclose,
  Pressable
} from 'native-base'
import { MaterialCommunityIcons, Ionicons, Entypo, Feather } from "@expo/vector-icons"

function Action({isOpen, onOpen, onClose}) {
  return (
    <>
      <Actionsheet isOpen={isOpen} onClose={onClose}>
        <Actionsheet.Content>
          <Actionsheet.Item>Settings</Actionsheet.Item>
          <Actionsheet.Item>Archive</Actionsheet.Item>
          <Actionsheet.Item>Insights</Actionsheet.Item>
          <Actionsheet.Item>Your Activity</Actionsheet.Item>
          <Actionsheet.Item>QR Code</Actionsheet.Item>
          <Actionsheet.Item>Saved</Actionsheet.Item>
          <Actionsheet.Item>Close Friends</Actionsheet.Item>
          <Actionsheet.Item>Discover People</Actionsheet.Item>
          <Actionsheet.Item>COVID-19 Information Center</Actionsheet.Item>
        </Actionsheet.Content>
      </Actionsheet>
    </>
  )
}

export default function Appbar({menu}){
  const { isOpen, onOpen, onClose } = useDisclose()
  return(
    <View>
      <Action isOpen={isOpen} onOpen={onOpen} onClose={onClose} />
      <Box p="4" bg="black">
        <Flex space="2" direction="row">
          <Box _text={{fontWeight: 'bold', fontSize: 24, color: 'white'}} flex="1">
            React Native By Ferdi
          </Box>
          <Icon
            as={Ionicons}
            mr="3"
            name="add"
            color="white"
            _dark={{
              color: "warmGray.50",
            }}
          />
          {
            menu?
            <Pressable onPress={onOpen}>
              <Icon
                as={Feather}
                name="menu"
                color="white"
                _dark={{
                  color: "warmGray.50"
                }}
              />
            </Pressable>
            :
            <Icon
              as={Entypo}
              name="chat"
              color="white"
              _dark={{
                color: "warmGray.50",
              }}
            />
          }
        </Flex>
      </Box>
    </View>
  )
}