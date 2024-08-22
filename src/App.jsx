import { BrowserRouter, Route, Routes } from "react-router-dom"
import Feed from "./components/Feed"
import Header from "./components/Header"
import VideoDetails from './components/VideoDetails'
import SearchFeed  from './components/SearchFeed'

function App() {

  return (
     <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Feed />} />
          <Route path="/video/:id" element={<VideoDetails />} />
          <Route path="/search/:searchTerm" element={<SearchFeed />} />
        </Routes>
     </BrowserRouter>
  )
}

export default App
