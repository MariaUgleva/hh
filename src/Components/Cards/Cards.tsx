import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { AppState } from "../../redux/reducers/rootReducer";
import Card from "../Card";
import { CardType } from "../../type";
import filterFunction from "./func";

const Cards: React.FC = (): JSX.Element => {
  // состояние с карточками для отрисовки с учетом фильтров
  const [filterCards, updateFilterCards] = useState<Array<CardType>>([]);
  // берем фильтры и все карточки из redux
  const { cards, filter } = useSelector((state: AppState) => state);
  // при изменении фильтров вызываем функцию, которая фильтрует карточки (cards.length в зависимостях поставила для самой первой отрисовки)
  useEffect(() => {
    updateFilterCards(filterFunction(cards, filter));
  }, [filter, cards.length]);
  return (
    <div className="container">
      <div className="cards">
        {filterCards.map((item: CardType) => (
          <Card key={item.id} data={item} />
        ))}
      </div>
    </div>
  );
};
export default Cards;
