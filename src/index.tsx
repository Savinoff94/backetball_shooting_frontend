import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from "react-router-dom";
import Store from './store/store';
import MyTeamStore from './store/MyTeamStore';
import MultiStageFormsStore from './store/MultiStageFormsStore';
import TrainingBoardStore from './store/trainingBoardStore';
import ManageTrainingDataStore from './store/ManageTrainingDataStore'
import WatchMyStatiscicsStore from './store/WatchMyStatisticsStore';
import { createContext } from 'react';


interface State {

  store: Store,
  myTeamStoreInstance: MyTeamStore,
  multiStageFormsStore: MultiStageFormsStore,
  trainingBoardStore: TrainingBoardStore,
  manageTrainingDataStore: ManageTrainingDataStore,
  watchMyStatiscicsStore: WatchMyStatiscicsStore,
}


const store = new Store();
const myTeamStoreInstance = MyTeamStore.getInstance();
const multiStageFormsStore = MultiStageFormsStore.getInstance();
const trainingBoardStore = TrainingBoardStore.getInstance();
const manageTrainingDataStore = ManageTrainingDataStore.getInstance();
const watchMyStatiscicsStore = WatchMyStatiscicsStore.getInstance();

export const Context = createContext<State>({
  store,
  myTeamStoreInstance,
  multiStageFormsStore,
  trainingBoardStore,
  manageTrainingDataStore,
  watchMyStatiscicsStore
})

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <Context.Provider value={{store, myTeamStoreInstance, multiStageFormsStore, trainingBoardStore, manageTrainingDataStore, watchMyStatiscicsStore}}>
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
