
import { useEffect } from 'react';
import ReactDOM from 'react-dom/client';

function App() {

  useEffect(() => {
    setTimeout(() => {
      document.body.style.backgroundColor = 'blue';
    }, 2000);
  }, );


}


var root = document.getElementById('root');
ReactDOM.createRoot(root).render(<App />);