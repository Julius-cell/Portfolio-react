import { Outlet } from 'react-router-dom'
import Menu from '../../components/menu/menu'

function MainPage() {

  return (
    <>
      <Menu />
      <Outlet />
    </>
  )
}

export default MainPage
