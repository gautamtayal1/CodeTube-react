import { useEffect } from "react";
import { useState } from "react";

export default function FetchData() {

  const [data, setData] = useState([])
  useEffect(() => {
    async function fetchData() {
      const response = await fetch("https://www.googleapis.com/youtube/v3/search?part=snippet&q=chaiaurcode&maxResults=50&type=video&videoDuration=medium&key=AIzaSyCF1wTehi8tH_9p_OccFXDeJiInIQ_s1ns");
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const json = await response.json()
      setData(json.items)
      console.log(data);
      
    }
    // fetchData()
  }, [])

  return { data }
}
