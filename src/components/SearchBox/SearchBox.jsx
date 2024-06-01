import { useId } from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectTextFilter } from "../../redux/filters/selectors";
import { changeTextFilter } from "../../redux/filters/slice";
import css from "./SearchBox.module.css";

export default function SearchBox() {
  const dispatch = useDispatch();
  const id = useId();
  const textFilter = useSelector(selectTextFilter);

  const handleChange = (event) => {
    dispatch(changeTextFilter(event.target.value));
  };

  return (
    <div>
      <label htmlFor={id} className={css.search}>
        Find contacts by name
        <input
          type="text"
          id={id}
          value={textFilter}
          onChange={handleChange}
          placeholder="Search by name"
        />
      </label>
    </div>
  );
}
