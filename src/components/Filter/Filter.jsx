import { useDispatch } from "react-redux";
import { setFilter } from "../../redux/filterSlice";
import css from "./Filter.module.css";

const Filter = () => {
  const dispatch = useDispatch();
  const handleChange = (evt) => {
    dispatch(setFilter(evt.target.value));
  };

  return (
    <div className={css.filterForm}>
      <label htmlFor="inputFilter" className={css.filterLabel}>
        Find contacts by name:
        <input
          type="text"
          className={css.filterInput}
          id="inputFilter"
          onChange={handleChange}
          placeholder="Search..."
        />
      </label>
    </div>
  );
};

export default Filter;
