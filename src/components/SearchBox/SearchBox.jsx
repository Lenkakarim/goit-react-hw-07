import { useDispatch, useSelector } from "react-redux";
import { setFilter } from "../../redux/filtersSlice";
import s from "./SearchBox.module.css";

const SearchBox = () => {
  const dispatch = useDispatch();
  const filter = useSelector((state) => state.filter.name);

  const handleChange = (e) => {
    dispatch(setFilter(e.target.value));
  };

  return (
    <div className={s.container}>
      <label htmlFor="searchInput" className={s.text}>
        Find contacts by name
      </label>
      <input
        className={s.input}
        type="text"
        onChange={handleChange}
        value={filter}
      />
    </div>
  );
};

export default SearchBox;
