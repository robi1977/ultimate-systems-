import { useSelector } from "react-redux"
import { NavLink, Outlet } from "react-router-dom";

const ProtectedRoute = () => {
  const { userInfo } = useSelector((state) => state.user);

  if(!userInfo) {
    return (
      <div className="unautorizate">
        <h1>Nie masz uprawnień do przeglądania tej strony</h1>
        <NavLink to='/login'>Logowanie</NavLink>
      </div>
    )
  }
  return <Outlet />
}

export default ProtectedRoute