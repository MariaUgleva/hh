import React from "react";
import { CardType } from "../../type";
import { useDispatch } from "react-redux";
import { setFilterAction } from "../../redux/actions/filterActions";
import FilterButton from './FilterButton';

type PropType = {
  data: CardType;
};
const Card: React.FC<PropType> = ({ data }): JSX.Element => {
  const dispatch = useDispatch();
  // отслеживаем нажатие на кнопку фильтра
  const handlerButtonFilter = (
    event: React.MouseEvent<HTMLButtonElement>
  ): void => {
    dispatch(
      setFilterAction({
        [event.currentTarget.name]: event.currentTarget.value,
      })
    );
  };
  return (
    <div className="card">
      <div className="card__inner">
        <img src={data.logo} alt="" className="card__logo" />
        <div className="card__info">
          <div className="card__info-top">
            <span className="card__company">{data.company}</span>
            {data.new ? <div className="card__new">New!</div> : null}
            {data.featured ? (
              <div className="card__featured">Featured</div>
            ) : null}
          </div>
          <div className="card__position">{data.position}</div>
          <div className="card__additionaly">
            <span className="card__postedAt">
              {data.postedAt}
            </span>
            <span className="card__contract">{data.contract}</span>
            <span className="card__location">{data.location}</span>
          </div>
        </div>
      </div>
      <div className="card__filter">
        <FilterButton onClick={handlerButtonFilter} name="role"  value={data.role}/>
        <FilterButton onClick={handlerButtonFilter} name="level" value={data.level} />
        {data.languages.map((item, index) => (
          <FilterButton key={item+index} onClick={handlerButtonFilter} name="languages" value={item} />
        ))}
        {data.tools.map((item, index) => (
          <FilterButton key={item+index} onClick={handlerButtonFilter} name="tools" value={item} />
        ))}
      </div>
    </div>
  );
};
export default Card;
