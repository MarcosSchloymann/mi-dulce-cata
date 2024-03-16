import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { FiltersProvider } from './context/filters.jsx';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <FiltersProvider>
    <App />
  </FiltersProvider>
);


