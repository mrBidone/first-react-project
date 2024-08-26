import { useContext } from "react";
import { UserContext } from "../../context/UserContext";
import Loader from "../Loader/Loader";

const UserMenu = () => {
  const { isLoading, userName, onLogOut } = useContext(UserContext);

  if (isLoading) return <Loader />;

  return (
    <div>
      {userName === null ? (
        <div>
          <button type="button">Sig In</button>
        </div>
      ) : (
        <div>
          <p>Hello, {userName} 👋</p>
          <button type="button" onClick={onLogOut}>
            Logout
          </button>
        </div>
      )}
    </div>
  );
};

export default UserMenu;
