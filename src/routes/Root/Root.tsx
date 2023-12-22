import { Outlet } from 'react-router-dom';
import Header from '../../components/UI/molecules/Header';

function Root() {

  return (
    <>
      <Header />
      <Outlet />
    </>
  )
}

export default Root;