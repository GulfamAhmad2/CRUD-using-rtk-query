import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css'
import Home from './pages/Home'
import Edit from './pages/Edit'
import { useGetDataQuery } from './rtq/api'

function App() {
  const res = useGetDataQuery()
  if(res.isLoading){
    return(
      <h1>Loading</h1>
    )
  }
  if(res.isError === true){
    return(
      <h1>{res.error.status}</h1>
    )
  }
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home data={res.data} />} />
        <Route path='/edit/:id' element={<Edit/>} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
