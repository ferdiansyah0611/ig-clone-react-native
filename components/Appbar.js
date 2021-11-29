import * as React from 'react';
import {
  View, Box, Flex, Text, Center, Icon,
  HamburgerIcon
} from 'native-base'
import { MaterialCommunityIcons, Ionicons, Entypo } from "@expo/vector-icons"

export default function Appbar(){
  return(
    <View>
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
          <Icon
            as={Entypo}
            name="chat"
            color="white"
            _dark={{
              color: "warmGray.50",
            }}
          />
        </Flex>
      </Box>
    </View>
  )
}