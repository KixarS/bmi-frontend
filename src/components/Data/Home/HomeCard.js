import { Box } from '@mui/material'
import React from 'react'
import Heart from '../../Animation/Heart/Heart'
import LayeredText from '../../Animation/LayeredText/LayeredText'

function HomeCard() {
  return (
    <div>
      <Box sx={{height:"150rem"}}>
          <LayeredText/>
          <Heart/>
      </Box>
    </div>
  )
}

export default HomeCard