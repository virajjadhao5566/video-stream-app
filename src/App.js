import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css'
import { Box } from '@mui/material'
import { ChannelDetail, Feed, Navbar, SearchFeed, VideoDetail } from './components'

function App() {
  return (
    <BrowserRouter>
      <Box className="main">
        <Navbar />
        <Routes>
          <Route exact path='/' element={<Feed />} />
          <Route path='/video/:id' element={<VideoDetail />} />
          <Route path='/channel/:id' element={<ChannelDetail />} />
          <Route path='/search/:searchTerm' element={<SearchFeed />} />
        </Routes>
      </Box>
    </BrowserRouter>
  )
}

export default App
