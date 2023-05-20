import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Bord from './context/Bord';
import TaskList from './context/TaskList';
import Tasks from './context/Task';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <Bord>
      <TaskList>
        <Tasks>
          <App />
        </Tasks>
      </TaskList>
    </Bord>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
