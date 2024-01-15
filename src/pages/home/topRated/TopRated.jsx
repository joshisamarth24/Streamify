import React, { useState } from 'react';
import ContentWrapper from '../../../components/contentWrapper/ContentWrapper';
import SwitchTabs from '../../../components/switchTabs/switchTabs';
import useFetch from '../../../hooks/useFetch';
import Caraousel from '../../../components/carousel/Caraousel';


const TopRated = () => {
    const [endpoint,setEndpoint] = useState("movie");
    const {data,loading} = useFetch(`/${endpoint}/top_rated`);
    const onTabChange = (tab) =>{
        setEndpoint(tab === "Movies" ? "movie" : "tv");
    }
  return (
    <div className='carouselSection'>
        <ContentWrapper>
            <span className='carouselTitle'>Top Rated</span>
            <SwitchTabs data={["Movies","TV Shows"]} onTabChange={onTabChange} />
        </ContentWrapper>
        <Caraousel data={data?.results} loading={loading} endpoint={endpoint}/>
    </div>
  )
}

export default TopRated