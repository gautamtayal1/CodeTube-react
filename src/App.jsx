import { useEffect } from "react"

function App() {
  useEffect(() => {
    async function fetchData() {
      const response = await fetch("https://www.googleapis.com/youtube/v3/search?part=snippet&q=codejavascript&maxResults=10&type=video&key=AIzaSyCF1wTehi8tH_9p_OccFXDeJiInIQ_s1ns");
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const data = await response.json()
      console.log(data);
      
    }
    fetchData()
  }, [])

  return(
    <div className=""></div>
  )
}

export default App
