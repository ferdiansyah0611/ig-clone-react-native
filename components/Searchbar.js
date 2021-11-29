import React from 'react'
import {
  View, Box, HStack, TextField, Icon
} from 'native-base'
import { StyleSheet } from 'react-native'
import { AntDesign } from "@expo/vector-icons"

export default function Searchbar(){
  return(
    <View style={styles.container}>
      <Box px="2">
        <HStack>
          <Box flex="1">
            <TextField placeholder="Search Here"/>
          </Box>
          <Box p="2">
            <Icon
              as={AntDesign}
              name="search1"
              color="white"
            />
          </Box>
        </HStack>
      </Box>
    </View>
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