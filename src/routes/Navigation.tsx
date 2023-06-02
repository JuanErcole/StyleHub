import { Routes, Route } from 'react-router-dom'
import { LoginAndRegisterPage } from '../auth/pages/LoginAndRegisterPage';
import { HomePage } from '../shop/pages/HomePage';
import { NavBar } from '../components/NavBar';
import { PageContainer } from '../components/PageContainer';
import { Footer } from '../components/Footer';
import { CartPages } from '../cart/pages/CartPages';
import { OffersPage } from '../product/pages/OffersPage';
import { ProductPage } from '../product/pages/ProductPage';
import { SavingProductPage } from '../product/pages/SavingProductPage';


export const Navigation = () => {

  const authStatus = 'authenticated' /* 'not-authenticated' */


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
                    <Route path='/product/add' element={<SavingProductPage />} />
                    <Route path='/product/edit/:id' element={<SavingProductPage />} />  
                    <Route path='/offers' element={<OffersPage />} />
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









