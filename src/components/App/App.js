import React from 'react';
import { Route } from 'react-router-dom';

import Main from '../Main/Main';
import DataContext from '../../context/DataContext';
import mountains from '../../utils/data';

function App() {
  const [dataContext, setDataContext] = React.useState(mountains);

  return (
    <div className='page'>
      <DataContext.Provider value={dataContext}>
        <Route path='/'>
          <Main />
        </Route>
      </DataContext.Provider>
    </div>
  );
}

export default App;
