import { Routes, Route, Navigate } from 'react-router-dom'
import { LoginAndRegisterPage } from '../auth/pages/LoginAndRegisterPage';
import { HomePage } from '../shop/pages/HomePage';
import { NavBar } from '../components/NavBar';
import { PageContainer } from '../components/PageContainer';
import { Footer } from '../components/Footer';
import { ProductPage } from '../shop/pages/ProductPage';
import { CartPages } from '../cart/pages/CartPages';

export const Navigation = () => {

  const authStatus = 'authenticated' /* 'not-authenticated' */

  // const user  = useAuth();

  return (
    <>
      {authStatus === 'authenticated' && <NavBar />}

      <PageContainer>
        <Routes>
          {
            authStatus !== 'authenticated'
              ? (<Route path='/auth/*' element={<LoginAndRegisterPage />} />)
              : (
                  <>
                    <Route path='/' element={<HomePage />} />
                    <Route path='/product' element={<ProductPage />} />
                    <Route path='/cart' element={<CartPages />} />
                    <Route path='/*' element={<HomePage />} />
                  </>
                )
          }
        </Routes>
      </PageContainer>
      {authStatus === 'authenticated' && <Footer />}



      <Routes>
        {/* <Route path='/*' element={<Navigate to='/' />} /> */}
      </Routes>

    </>


  )
}









