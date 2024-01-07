import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from "react-router-dom";
import Store from './store/store';
import SelectTrainingSquadStore from './store/selectTrainingSquadStore';
import TrainingStagesStore from './store/trainingStagesStore'
import TrainingBoardStore from './store/trainingBoardStore';
import ManageTrainingDataStore from './store/ManageTrainingDataStore'
import { createContext } from 'react';


interface State {

  store: Store,
  selectTrainingSquadStoreInstance: SelectTrainingSquadStore,
  trainingStagesStore: TrainingStagesStore,
  trainingBoardStore: TrainingBoardStore,
  manageTrainingDataStore: ManageTrainingDataStore
}


const store = new Store();
const selectTrainingSquadStoreInstance = SelectTrainingSquadStore.getInstance();
const trainingStagesStore = TrainingStagesStore.getInstance();
const trainingBoardStore = TrainingBoardStore.getInstance();
const manageTrainingDataStore = ManageTrainingDataStore.getInstance();

export const Context = createContext<State>({
  store,
  selectTrainingSquadStoreInstance,
  trainingStagesStore,
  trainingBoardStore,
  manageTrainingDataStore
})

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <Context.Provider value={{store, selectTrainingSquadStoreInstance, trainingStagesStore, trainingBoardStore, manageTrainingDataStore}}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Context.Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
