import { useEffect, useState, useRef } from "react";
import { fetchUserList } from "../services/UserService";
import UserInfoCard from "./UserInfoCard";
import "./../assets/css/UserListComponent.css";

/**
 * User list component
 */
const UserListComponent = () => {
  const [loading, setLoading] = useState(false);
  const [loadMoreLoader, setloadMoreLoader] = useState(false);
  const [userData, setUserData] = useState([]);
  const [hasError, setHasError] = useState(false);
  const [items, setItems] = useState(10);
  const thisRef = useRef();

  useEffect(() => {
    fetchData();
    infiniteScroll();
  }, []);

  // fetch user data
  function fetchData() {
    setLoading(true);
    fetchUserList
      .then((res) => {
        setUserData(res);
        setHasError(false);
        setLoading(false);
        setloadMoreLoader(false);
      })
      .catch(() => {
        setLoading(false);
        setHasError(true);
      });
  }
  // use for scroll data
  const infiniteScroll = () => {
    thisRef.current.addEventListener("scroll", (e) => {
      if (
        thisRef.current.scrollTop + thisRef.current.clientHeight >=
        thisRef.current.scrollHeight - 20 && items <= userData.length
      ) {
        loadMore();
      }
    });
  };

  const loadMore = () => {
    setloadMoreLoader(true);
    setTimeout(() => {
      setItems((items) => items + 5);
      setloadMoreLoader(false);
    }, 3000);
  };

  return (
    <>
      <div className="container" ref={thisRef}>
        {loading ? (
          <div className="loading">Loading...</div>
        ) : hasError ? (
          <div className="error">Error occured.</div>
        ) : userData.length > 0 ? (
          userData
            .slice(0, items)
            .map((userInfo) => (
              <UserInfoCard key={userInfo.id} userInfo={userInfo} />
            ))
        ) : (
          <div className="loading">No User Data</div>
        )}
      </div>
      <>
        {loadMoreLoader && (
          <div className="loading-data">User data Loading...</div>
        )}
      </>
    </>
  );
};

export default UserListComponent;
