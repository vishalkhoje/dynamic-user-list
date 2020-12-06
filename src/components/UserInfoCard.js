import NO_IMAGE from "./../assets/images/no-image-available.svg";

//to handle error if image is broken/not available
const handleImageError = (e) => {
  e.target.src = NO_IMAGE;
};

/**
 * User Information card component component
 */
const UserInfoCard = ({userInfo}) => (
  <div className="card" key={userInfo.id}>
    <div className="image">
      <img src={userInfo.avtar} onError={handleImageError} alt="avtar" />
    </div>
    <div className="user-info">
      <h5>{userInfo.first_name + " " + userInfo.last_name}</h5>
      <p className="accent-text">{userInfo.dob}</p>
      <p className="accent-text">{userInfo.city}</p>
    </div>
  </div>
);

export default UserInfoCard;
