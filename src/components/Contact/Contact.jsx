import { Link } from "react-router-dom";
import Profile from "../../assets/images/Profile.png";
import "./contact.css";

const Contact = ({ contact, onDelete }) => {
  const { name, email, id } = contact;

  return (
    <div className="item text-light" key={id}>
      <div className="content">
        <img src={Profile} alt="profile-img" />
        <Link to={`/user/${id}`} state={{ contact: contact }}>
          <div className="user">
            <p>name : {name}</p>
            <p>email : {email}</p>
          </div>
        </Link>
      </div>
      <div>
        <Link to={`/edit/${id}`}>
          <button className="btn btn-secondary edit">Edit</button>
        </Link>
        <button className="btn btn-danger" onClick={() => onDelete(id)}>
          Delete
        </button>
      </div>
    </div>
  );
};

export default Contact;
