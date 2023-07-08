import 'bulmaswatch/superhero/bulmaswatch.min.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import { FC } from 'react';
import { store } from './state';
import { Provider } from 'react-redux';
import CellList from './components/cell-list';

const App: FC = () => {
  return (
    <Provider store={store}>
      <div>
        <CellList />
      </div>
    </Provider>
  );
};

export default App;
