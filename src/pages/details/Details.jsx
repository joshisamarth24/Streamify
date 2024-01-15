import React from 'react'
import useFetch from '../../hooks/useFetch'
import { useParams } from 'react-router-dom'
import "./style.scss"
import DetailsBanner from './detailsBanner/DetailsBanner'
import Cast from './cast/Cast'
import VideoCarousel from './videoCarousel/VideoCarousel'
import Similar from './carousels/Similar'
import Recommendation from './carousels/Recommedation'

const Details = () => {
  const {mediaType,id} = useParams();
  const {data,loading} = useFetch(`/${mediaType}/${id}/videos`);
  const {data:credits,loading:creditsLoading} = useFetch(`/${mediaType}/${id}/credits`);
  console.log(credits)


  
  return (
    <div>
      <DetailsBanner video={data?.results?.[0]} crew={credits?.crew}/>
      <Cast data={credits?.cast} loading={creditsLoading}  />
      <VideoCarousel data={data} loading={loading}/>
      <Similar mediaType={mediaType} id={id}/>
      <Recommendation mediaType={mediaType} id={id}/>
    </div>
  )
}

export default Details