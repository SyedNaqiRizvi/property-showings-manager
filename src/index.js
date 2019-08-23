import React from 'react';
import ReactDOM from 'react-dom';
import ShowingList from './components/ShowingList';
import BookingForm from './components/BookingForm';
import Title from './components/Title';
import AppGrid from './components/AppGrid';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import rootReducer from './reducers';

const store = createStore(
  rootReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
);

const App = () => {
  return (
    <AppGrid>
      <Title style={{ gridColumn: '1', gridRow: '1' }} />
      <BookingForm style={{ gridColumn: '1', gridRow: '2' }} />
      <ShowingList style={{ gridColumn: '1', gridRow: '3' }} />
    </AppGrid>
  );
};

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.querySelector('#root'),
);
