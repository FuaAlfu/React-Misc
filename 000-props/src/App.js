import PopCard from "./components/PopCard";

function App() {
  return (
    <div className="App">
       <PopCard
       title = "card one"
       description = "for the best"
       />
      {/*End of card one*/}
      <PopCard
      title = "card two"
      description = "for the test"
      />  
       {/*End of card two*/}
    </div>
  );
}

export default App;
