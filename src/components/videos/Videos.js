import { Box, Stack } from '@mui/material'
import React from 'react'
import ChannelCard from '../channelCard/ChannelCard'
import Loader from '../loader/Loader'
import VideoCard from '../videoCard/VideoCard'

const Videos = ({videos}) => {
  if(!videos.length) return <Loader/>

  return (
    <Stack width={'100%'} direction={'row'} flexWrap={'wrap'} justifyContent={'start'} alignItems={'center'} gap={5} >
      {videos.map((item, idx) => (
        <Box key={idx}>
          {item.id.videoId && <VideoCard video={item} />}
          {item.id.channelId && <ChannelCard video={item} />}
        </Box>
      ))}
    </Stack>
  )
}

export default Videos