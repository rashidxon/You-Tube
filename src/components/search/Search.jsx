import React from 'react'
import {useState, useEffect} from 'react'
import {useParams} from 'react-router-dom'
import {ApiService} from '../../service/ApiService'
import {Box, Container, Typography} from '@mui/material'
import { colors } from '../../constants/colors'
import {Videos} from '..'

const Search = () => {
  const [videos, setVideos] = useState([])
  const {id} = useParams()

  useEffect(() => {
    const getData = async () => {
      try {
        const data = await ApiService.fetching(`search?part=snippet&q=${id}`)
        setVideos(data.items)
      } catch (error) {
        console.log(error);
      }
    }
    getData()
  }, [id])

  console.log(videos);
  
  return (
    <Box p={1} sx={{height: '90vh'}}>
      <Container maxWidth={"90%"}>
        <Typography variant={'h4'} fontWeight={'bold'} >
          Search results for <span style={{color: colors.secondary}}>{id}</span> videos
        </Typography>
        <Videos videos={videos} />
      </Container>  
    </Box>
  )
}

export default Search