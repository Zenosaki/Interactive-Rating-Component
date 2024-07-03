import { useState } from 'react';
import Ratings from './Components/Ratings';
import Thanks from './Components/Thanks';
import './sass/Main.scss';
import { getCurrentRate } from './scripts/rate';

function App() {
  const [submitted, setSubmitted] = useState(false);
  const rate= getCurrentRate()

  const submit = (y) => {
    if(y != null){
      setSubmitted(true);
    }
  };

  return (
    <div className="container">
      <main>
        {!submitted && <Ratings submit={submit} />}
        {submitted && <Thanks rated={rate}/>}
      </main>
    </div>
  );
}

export default App;
