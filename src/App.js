
import './App.css'

function App() {
  return (
    <div className='App'>
      <h1>Welcome to Cloud Streamer</h1>
      <video width="700px" height="400px" controls>
        <source src='https://d3kdcam0njjw2f.cloudfront.net/videoplayback.mp4' type='video/mp4'/>
      </video>
      <h2>Ind vs Pak (2011)</h2>
    </div>
  )
}

export default App
