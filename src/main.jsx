import { createRoot } from 'react-dom/client'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

import NotFound from './pages/not-found/not-found'
import MainPage from './pages/main-page/main-page'
import LoginPage from './pages/login-page/login-page'

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <Routes>

      <Route path='/' element={<MainPage />}>
        <Route index element={<h1>holaaaa</h1>}/>
        <Route path='chao' element={<h1>chaooo</h1>}/>
      </Route>

      <Route path='/login' element={<LoginPage />}/>

      <Route path='*' element={<NotFound />}/>
      
    </Routes>
  </BrowserRouter>
)
