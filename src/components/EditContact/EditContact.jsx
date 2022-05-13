import { useEffect, useState } from "react";
import "./editContact.css";
import getOneContacts from "../../services/GetOneContactService";
import { Link, useNavigate, useParams } from "react-router-dom";
import updateContact from "../../services/updateContactService";
import getContacts from "../../services/getContactsService";

const EditContact = (props) => {
  const [contact, setContact] = useState({ name: "", email: "" });
  const navigate = useNavigate();
  const params = useParams();

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
      await updateContact(params.id, contact);
      await getContacts();
      setContact({ name: "", email: "" });
      navigate("/");
    } catch (error) {}
  };

  useEffect(() => {
    const localFetch = async () => {
      try {
        const { data } = await getOneContacts(params.id);
        setContact({ name: data.name, email: data.email });
      } catch (error) {}
    };
    localFetch();
  }, []);

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
          Update Contact
        </button>
        <Link to="/">Back to contact list</Link>
      </div>
    </form>
  );
};

export default EditContact;
