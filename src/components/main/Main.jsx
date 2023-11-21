import React, {useState, useEffect} from 'react'
import {Stack, Box, Container, Typography} from '@mui/material'
import { colors } from '../../constants/colors'
import {Category, Videos } from '../'
import { ApiService } from '../../service/ApiService'

const Main = () => {
  const [selecedCategory, setSelecedCategory] = useState("New")

  const selecedCategoryHandle = (category) => setSelecedCategory(category)
  const [videos, setVideos] = useState([])

  useEffect(()=>{
    const getData = async () => {
      try{
        const data = await ApiService.fetching(`search?part=snippet&q=${selecedCategory}`)
        setVideos(data.items)
      } catch (error) {
        console.log(error);
      }   
    }
    getData() 
  }, [selecedCategory])

  return (
    <Stack>
      <Category selecedCategoryHandle={selecedCategoryHandle} selecedCategory={selecedCategory} />
      <Box p={2} sx={{height: "90vh"}} >
        <Container maxWidth={'90%'}>
          <Typography variant={'h4'} fontWeight={'bold'} mb={2} >
            {selecedCategory} <span style={{color: colors.secondary}}>videos</span>
          </Typography>
          <Videos videos={videos} />
        </Container>
      </Box>
    </Stack>
  )
}

export default Main