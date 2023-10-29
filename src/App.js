import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css'
import { Box } from '@mui/material'
import { ChannelDetail, Feed, Navbar, SearchFeed, VideoDetail } from './components'
import Db from './components/Db'
// import { ScanCommand } from '@aws-sdk/client-dynamodb'



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
          <Route path='/db' element={<Db />} />
        </Routes>
      </Box>
    </BrowserRouter>
  )
}

export default App
