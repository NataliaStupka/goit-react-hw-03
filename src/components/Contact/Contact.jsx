import s from "./Contact.module.css";
import PropTypes from "prop-types";

import { FaUser } from "react-icons/fa6";
import { FaPhone } from "react-icons/fa6";

const Contact = ({ data: { id, name, number }, onDelete }) => {
  //console.log(contacts);
  return (
    <div className={s.container}>
      <div className={s.wrapper}>
        <p>
          <FaUser className={s.icon} />
          {name}
        </p>
        <p>
          <FaPhone className={s.icon} />
          {number}
        </p>
      </div>
      <button className={s.button} onClick={() => onDelete(id)}>
        Delete
      </button>
    </div>
  );
};

Contact.propTypes = {
  onDelete: PropTypes.func.isRequired,
};

export default Contact;
