import './App.css';
import React from 'react';
import data from './data';
import SingleQuestion from './components/Question';
function App() {
  const [question, setQuestion] = useState(data); 
    <main>
       <div className="container">
           <h3>questions and answers about...</h3>
           <section className="info">
           {
            question.map((question) => {
              return <SingleQuestion
              key={question.id} {...question}
              />
            })
           }
           </section>
       </div>
    </main>
}

export default App;
