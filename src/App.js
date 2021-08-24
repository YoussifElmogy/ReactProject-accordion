import React, { useState } from 'react';
import data from './data';
import SingleQuestion from './Question';
function App() {
    const [questions,setquestions] = useState(data);
  return <main>
    <div className="container">
      <h3>questions and answers about login</h3>
      <div className="section-info">
        {
          questions.map((q)=>{
            return <SingleQuestion key={q.id} {...q}></SingleQuestion>
          })
        }
      </div>
    </div>
  </main>;
}

export default App;
