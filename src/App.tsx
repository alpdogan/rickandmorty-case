import React from 'react';
import logo from './logo.svg';
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
  const { loading, error } = useLoading();
  
  return (
    <>
      <div>{loading}</div>
      <MultiSelect searchData={searchCharacter}></MultiSelect>
      <div>{error}</div>
    </>
  );
};

export default App;