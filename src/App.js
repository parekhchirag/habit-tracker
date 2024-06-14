import { useState } from 'react';
import AddHabit from './components/AddHabit';
import ListHabits from './components/ListHabits';
import { ErrorContext } from './contexts/ErrorContext';
import Error from './components/Error';

function App() {
  const [error, setError] =useState('');

  return (
    <div className="App">
      <ErrorContext.Provider value={{error, setError}}>
        <div className="timeline-container">
          <AddHabit />
          <ListHabits />
          <Error />
        </div>
        <div className="overview-container"></div>
      </ErrorContext.Provider>
    </div>
  );
}

export default App;
