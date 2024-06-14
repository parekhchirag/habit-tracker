import { useState } from 'react';
import AddHabit from './components/AddHabit';
import ListHabits from './components/ListHabits';
import { ErrorContext } from './contexts/ErrorContext';
import Error from './components/Error';
import AppHeader from './components/AppHeader';

function App() {
  const [error, setError] =useState('');

  return (
    <div className="App">
      <ErrorContext.Provider value={{error, setError}}>
        <AppHeader />
        <div className='container'>
          <div className="timeline-container">
            <AddHabit />
            <ListHabits />
            <Error />
          </div>
          <div className="overview-container"></div>
        </div>
      </ErrorContext.Provider>
    </div>
  );
}

export default App;
