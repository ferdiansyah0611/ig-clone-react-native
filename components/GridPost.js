import React from 'react'
import {
  ScrollView, Box, Avatar, Text, HStack, Center, Button, Image, VStack, Pressable
} from 'native-base'
import { FlatGrid } from 'react-native-super-grid'
import { StyleSheet, View } from 'react-native'
import { useNavigation } from '@react-navigation/native'

export default function GridPost({post}) {
  const navigation = useNavigation()
  return (
    <FlatGrid
      itemDimension={100}
      data={post}
      style={styles.gridView}
      spacing={1}
      renderItem={({ item }) => (
        <View>
          <Pressable onPress={() => navigation.navigate('ShowPost', {id: item.id})}>
            <Image
              source={{
                uri: item.src
              }}
              height={100}
            />
          </Pressable>
        </View>
      )}
    />
  );
}

const styles = StyleSheet.create({
  gridView: {
    flex: 1,
  },
  container: {
    backgroundColor: 'black'
  }
});