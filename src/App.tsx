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
    <>
      <div>{error}</div>
      <MultiSelect searchData={searchCharacter}></MultiSelect>
    </>
  );
};

export default App;