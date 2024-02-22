import React from 'react'
import { GoogleMapsEmbed } from '@next/third-parties/google'

const Contact = () => {
  return (
    <GoogleMapsEmbed
      apiKey='XYZ'
      height={200}
      width='100%'
      mode='place'
      q='Brooklyn+Bridge,New+York,NY'
    />
  )
}

export default Contact
