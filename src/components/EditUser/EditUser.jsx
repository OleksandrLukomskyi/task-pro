import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { editUser } from "redux/auth/operations";

const EditUser = ({ isOpen, onClose }) => {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.auth.user);

  const [userName, setUserName] = useState(user.userName);
  const [email, setEmail] = useState(user.email);
  const [password, setPassword] = useState("");
  const [avatarFile, setAvatarFile] = useState(null);

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    setAvatarFile(file);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("userName", userName);
    formData.append("email", email);
    if (password) formData.append("password", password);
    if (avatarFile) formData.append("avatar", avatarFile);

    await dispatch(editUser(formData));
    onClose();
  };

  if (!isOpen) {
    return null;
  }

  return (
    <div className="modal">
      <div className="modalContent">
        <span className="close" onClick={onClose}>
          X
        </span>
        <h2>Edit Profile</h2>
        <div className="containerImg">
          <input
            type="file"
            onChange={handleFileChange}
            accept="image/*"
            style={{ display: "none" }}
            id="avatarInput"
          />
          {avatarFile ? (
            <img
              width="32px"
              height="32px"
              src={URL.createObjectURL(avatarFile)}
              alt="user"
            />
          ) : (
            <img width="32px" height="32px" src={user.avatarURL} alt="user" />
          )}
          <button
            type="button"
            onClick={() => document.getElementById("avatarInput").click()}
            className="plusButton"
          >
            +
          </button>
        </div>
        <form onSubmit={handleSubmit}>
          <div>
            <input
              type="text"
              value={userName}
              onChange={(e) => setUserName(e.target.value)}
              placeholder="Name"
            />
          </div>
          <div>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Email"
            />
          </div>
          <div>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Password"
            />
          </div>
          <button type="submit">Send</button>
        </form>
      </div>
    </div>
  );
};

export default EditUser;
