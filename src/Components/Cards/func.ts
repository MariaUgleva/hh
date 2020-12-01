import { CardType, FilterObjectRedux } from "../../type";
const filterFunction = (
  cards: Array<CardType>,
  filter: FilterObjectRedux
): Array<CardType> => {
  const newCards: Array<CardType> = cards.filter((item: CardType) => {
    // ищем в карточке наличие role из фильтра, если находим или role в фильтре не назначено, то возвращаем true
    const role: boolean = filter.role.length
      ? filter.role.includes(item.role)
      : true;
      // тоже самое, но с level
    const level: boolean = filter.level.length
      ? filter.level.includes(item.level)
      : true;
      // тоже самое, но с languages (ф-я немного другая, т. к. languages содержит много эл-тов)
    const languages: boolean = filter.languages.length
      ? !!item.languages.find(elem => filter.languages.includes(elem))
      : true;
      // тоже самое, но с tools (ф-я немного другая, т. к. tools содержит много эл-тов)
    const tools: boolean = filter.tools.length
    ? !!item.tools.find(elem => filter.tools.includes(elem))
      : true;
      // возвращаем true, если карточка подходит
    return role && level && languages && tools;
  });
  // возвращаем массив подходящих карточек
  return newCards;
};
export default filterFunction;
