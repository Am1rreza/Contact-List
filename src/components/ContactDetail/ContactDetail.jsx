import { Link, useLocation } from "react-router-dom";

const ContactDetail = () => {
  const location = useLocation();
  const data = location.state.contact;
  const { name, email, id } = data;

  return (
    <div>
      <p>User Name Is {name}</p>
      <p>User Email Is {email}</p>
      <Link to="/">Go To Contact List</Link>
    </div>
  );
};

export default ContactDetail;
