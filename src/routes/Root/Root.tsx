import { Outlet } from 'react-router-dom';

function Root() {

  return (
    <>
      <p>Shared content</p>
      <Outlet />
    </>
  )
}

export default Root;