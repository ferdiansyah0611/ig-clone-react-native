import * as React from 'react'
import Card from '../components/Card'
import {
  ScrollView
} from 'native-base'
import ctx from '../ctx'

import Appbar from '../components/Appbar'

export default function Home(){
  const context = React.useContext(ctx)
  return(
    <>
      <Appbar/>
      <ScrollView>
        {
          context.post.map((d, i) => (
            <Card data={d} key={i} />
          ))
        }
      </ScrollView>
    </>
  )
}