import s from "./SearchBox.module.css";
import PropTypes from "prop-types";

const SearchBox = ({ onFilter }) => {
  return (
    <div className={s.searchWrapper}>
      <p>Find contact by name</p>

      {/* e.target.value - передамо значення, що вводяться */}
      <input type="text" onChange={(e) => onFilter(e.target.value)} />
    </div>
  );
};

SearchBox.prototype = {
  onFilter: PropTypes.func.isRequired,
};

export default SearchBox;
