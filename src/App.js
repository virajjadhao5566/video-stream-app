
import './App.css'

function App() {
  return (
    <div className='App'>
      <h1>Welcome to Cloud Streamer</h1>
      <video width="700px" height="400px" controls>
        <source src='https://d3kdcam0njjw2f.cloudfront.net/videoplayback.mp4' type='video/mp4'/>
      </video>
    </div>
  )
}

export default App
