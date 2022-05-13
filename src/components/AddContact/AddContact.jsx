import { useState } from "react";
import "./addContact.css";
import { Link, useNavigate } from "react-router-dom";
import addOneContact from "../../services/AddContactService";

const AddContact = (props) => {
  const [contact, setContact] = useState({ name: "", email: "" });
  const navigate = useNavigate();

  const changeHandler = (e) => {
    setContact({ ...contact, [e.target.name]: e.target.value });
  };

  const submitForm = async (e) => {
    if (!contact.name || !contact.email) {
      e.preventDefault();
      alert("Please fill the form !");
      return;
    }
    e.preventDefault();
    try {
      const { data } = await addOneContact(contact);
      setContact({ name: "", email: "" });
      navigate("/");
    } catch (error) {}
  };

  return (
    <form onSubmit={submitForm}>
      <div className="formControl">
        <label className="form-label">Name</label>
        <input
          type="text"
          name="name"
          value={contact.name}
          onChange={changeHandler}
          className="form-control"
        />
      </div>
      <div className="formControl">
        <label className="form-label">Email</label>
        <input
          type="email"
          name="email"
          value={contact.email}
          onChange={changeHandler}
          className="form-control"
        />
      </div>
      <div className="btnBox">
        <button className="btn btn-primary" type="submit">
          Add Contact
        </button>
        <Link to="/">Back to contact list</Link>
      </div>
    </form>
  );
};

export default AddContact;
