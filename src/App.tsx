import { BrowserRouter } from 'react-router-dom'
import { Navigation } from './routes/Navigation'
import { SnackbarProvider } from 'notistack'
// import { AuthProvider } from './context/AuthContext'



function App() {

  return (
    <BrowserRouter>
      <SnackbarProvider maxSnack={3}>
        <Navigation />
      </SnackbarProvider>
    </BrowserRouter>
  )
}

export default App
