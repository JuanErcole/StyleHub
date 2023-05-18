import { Routes, Route, Navigate } from 'react-router-dom'
import { LoginAndRegisterPage } from '../auth/pages/LoginAndRegisterPage';
import { HomePage } from '../shop/pages/HomePage';

export const Navigation = () => {

  const authStatus = 'not-authenticated'

  // const user  = useAuth();

  return (
    <Routes>
      {
        (authStatus !== 'authenticated')
          ? <Route path='/auth/*' element={<LoginAndRegisterPage />} />
          : <Route path='/*' element={<HomePage />} /> 
      }      

      <Route path='/*' element={ <Navigate to='/auth/login' /> } />

    </Routes>


  )
}









