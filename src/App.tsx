import { BrowserRouter } from 'react-router-dom'
import { Navigation } from './routes/Navigation'
// import { AuthProvider } from './context/AuthContext'



function App() {

  return (
    <BrowserRouter>
        <Navigation />
    </BrowserRouter>
  )
}

export default App
