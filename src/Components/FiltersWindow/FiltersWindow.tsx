import React, {useCallback} from "react";
import { useSelector, useDispatch } from "react-redux";
import { AppState } from "../../redux/reducers/rootReducer";
import {
  deleleteFilterAction,
  clearFilterAction,
} from "../../redux/actions/filterActions";
import { FilterObjectRedux } from "../../type";

const FiltersWindow: React.FC = (): JSX.Element => {
  const dispatch = useDispatch();
//   берем фильтры из redux
  const filters: FilterObjectRedux = useSelector(
    (state: AppState) => state.filter
  );
//   следим за кнопками удаления фильтра
  const handleDelete = (event: React.MouseEvent<HTMLButtonElement>): void => {
    dispatch(
      deleleteFilterAction({
        [event.currentTarget.name]: event.currentTarget.value,
      })
    );
  };
//   сдедим за кнопкой удаления всех фильтров
  const handleClear = useCallback(() => {
      dispatch(clearFilterAction());
  }, [dispatch]);
  return (
    <div className="container">
      <div className="filter">
        <div className="filter__box">
          <div className="filterButtons">
            {Object.keys(filters).map((item) =>
              filters[item].map((elem: string) => (
                <div key={elem} className="filterButtons__item">
                  {elem}
                  <button
                    onClick={handleDelete}
                    name={item}
                    value={elem}
                    className="filterButtons__item-btn"
                  >
                    <div className="filterButtons__item-cross"></div>
                  </button>
                </div>
              ))
            )}
          </div>
          <button onClick={handleClear} className="filterClear">
            Clear
          </button>
        </div>
      </div>
    </div>
  );
};
export default FiltersWindow;
