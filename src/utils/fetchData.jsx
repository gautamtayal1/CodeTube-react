import { useEffect } from "react";
import { useState } from "react";
import { useSearchParams } from "react-router-dom";

export function FetchHomeData() {

  const API_KEY_1 = import.meta.env.VITE_API_KEY_1;
  const [homeData, setHomeData] = useState([])

  useEffect(() => {
    async function fetchData() {
      const response = await fetch(`https://www.googleapis.com/youtube/v3/search?key=${API_KEY_1}&type=video&q=${encodeURIComponent("coding programming tutorial software development")}&part=snippet&maxResults=50&order=viewCount&regionCode=US&videoDuration=medium`);
      
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const json = await response.json()
      setHomeData(json.items)
      console.log(homeData);
    }
    fetchData()
  }, [])

  return { homeData }
}


export function FetchSearchData() {

  const API_KEY_3 = import.meta.env.VITE_API_KEY_3;
  console.log(API_KEY_3)
  

  const [searchData, setSearchData] = useState([])
  const [searchParams] = useSearchParams()
  const query = searchParams.get("q")
  

  useEffect(() => {
    async function fetchData() {
      const data = await fetch (`https://www.googleapis.com/youtube/v3/search?key=${API_KEY_3}&type=video&q=${query}&part=snippet&maxResults=50&order=relevance&videoDuration=medium`)

      if(!data.ok) {
        throw new Error("search data - unable to fetch")
      }

      const json = await data.json()
      console.log(json)
      setSearchData(json.items)
      
    }
    // fetchData()
  }, [query])

  return { searchData }
}


export function FetchRelatedData({videoId}) {

  const API_KEY_1 = import.meta.env.VITE_API_KEY_1;

  const [relatedData, setRelatedData] = useState([])

  useEffect(() => {
    async function fetchData() {
      const data = fetch (`https://www.googleapis.com/youtube/v3/search?key=${API_KEY_1}&type=videorelatedToVideoId=${videoId}&part=snippet&maxResults=10`)

      if(!data.ok) {
        throw new Error("related data - unable to fetch")
      }

      const json = data.json()
      setRelatedData(json.items)
      console.log(relatedData)
    }
    // fetchData()
  }, [])

  return { relatedData }
}


export function FetchVideoData() {

  const [searchParams] = useSearchParams()
  const videoId = searchParams.get("v")

  const API_KEY_1 = import.meta.env.VITE_API_KEY_1;

  const [videoData, setVideoData] = useState([])

  useEffect(() => {
    async function fetchData() {
      const data = await fetch (`https://www.googleapis.com/youtube/v3/videos?key=${API_KEY_1}&id=${videoId}&part=snippet,statistics,contentDetails`)

      if(!data.ok) {
        throw new Error("video data - unable to fetch")
      }

      const json = await data.json()
      console.log(videoData)
      setVideoData(json.items)
      
    }
    fetchData()
  }, [videoId])

  return { videoData }
}
