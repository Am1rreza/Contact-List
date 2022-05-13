import "./contactList.css";
import { Link } from "react-router-dom";
import Contact from "../Contact/Contact";
import { useEffect, useState } from "react";
import getContacts from "../../services/getContactsService";
import deleteOneContacts from "../../services/DeleteContactService";

const ContactList = (props) => {
  const [contacts, setContacts] = useState(null);
  // const [allContacts, setAllContacts] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    const getAllContacts = async () => {
      const { data } = await getContacts();
      // setAllContacts(data);
      setContacts(data);
    };
    try {
      getAllContacts();
    } catch (error) {}
  }, []);

  const deleteContactHandler = async (id) => {
    try {
      await deleteOneContacts(id);
      const filteredContacts = contacts.filter((c) => c.id != id);
      setContacts(filteredContacts);
    } catch (error) {}
  };

  const searchHandler = (e) => {
    const search = e.target.value;
    setSearchTerm(search);

    if (search != "") {
      // const filteredContacts = allContacts.filter((c) => {
      //   return Object.values(c)
      //     .join(" ")
      //     .toLowerCase()
      //     .includes(search.toLowerCase());
      // });
      const filteredContacts = contacts.filter((c) => {
        return Object.values(c)
          .join(" ")
          .toLowerCase()
          .includes(search.toLowerCase());
      });
      setContacts(filteredContacts);
    } else {
      // setContacts(allContacts);
      setContacts(contacts);
    }
  };

  return (
    <section className="contactList">
      <div className="header">
        <span className="display-4">Contacts List</span>
        <Link to="/add">
          <button pathname="/" className="btn btn-success">
            Add
          </button>
        </Link>
      </div>
      {/* <div>
        <input
          value={searchTerm}
          className="form-control search"
          type="text"
          placeholder="Search..."
          onChange={searchHandler}
        />
      </div> */}
      {contacts ? (
        contacts.map((contact) => {
          return (
            <Contact
              key={contact.id}
              contact={contact}
              onDelete={deleteContactHandler}
            />
          );
        })
      ) : (
        <h2 style={{ marginTop: "1rem" }}>Loading Contact...</h2>
      )}
    </section>
  );
};

export default ContactList;
