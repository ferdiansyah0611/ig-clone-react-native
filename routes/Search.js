import * as React from 'react'
import Card from '../components/Card'
import {
  ScrollView
} from 'native-base'
import { StyleSheet } from 'react-native'
import ctx from '../ctx'

import Searchbar from '../components/Searchbar'
import GridPost from '../components/GridPost'

export default function Search(){
  const context = React.useContext(ctx)
  return(
    <>
      <Searchbar/>
      <ScrollView style={styles.container}>
        <GridPost
          post={[
            ...context.post,
            ...context.post,
            ...context.post,
            ...context.post,
            ...context.post,
            ...context.post,
          ]}
        />
      </ScrollView>
    </>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'black'
  }
});