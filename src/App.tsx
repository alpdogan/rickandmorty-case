import './App.css';
import { MultiSelect } from './components/MultiSelect';
import { searchCharacter } from './api/search';
import { LoadingProvider, useLoading } from './context/LoadingContext';

const App = () => {
  return (
    <LoadingProvider>
      <div className="App">
        <AppContent />
      </div>
    </LoadingProvider>
  );
};

const AppContent = () => {
  const { error } = useLoading();
  
  return (
    <div style={{ padding: 10 }}>
      {error && <div className="error">{error}</div>}
      <MultiSelect searchData={searchCharacter}></MultiSelect>
    </div>
  );
};

export default App;