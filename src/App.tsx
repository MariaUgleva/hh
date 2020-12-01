import React, {useEffect} from 'react';
import cards from './data.json';
import {useDispatch, useSelector} from 'react-redux';
import {AppState} from './redux/reducers/rootReducer';
import {loadCardsAction} from './redux/actions/AllCardsActions';
import {FilterObjectRedux} from './type';
import Header from './Components/Header';
import Cards from './Components/Cards';
import FiltersWindow from './Components/FiltersWindow';

function App(): JSX.Element {
  const dispatch = useDispatch();
  const filters: FilterObjectRedux = useSelector((state: AppState) => state.filter);
  useEffect(() => {dispatch(loadCardsAction(cards))}, [dispatch]);
  return (
    <div className="App">
      <Header />
      {Object.keys(filters).find(item => filters[item].length > 0) ? <FiltersWindow /> : null}
      <Cards />
    </div>
  );
}

export default App;
