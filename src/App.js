import './App.css';
import Navigation from './Navigation';
import Header from './Header';
import Collections from './Collections';
import Filter from './Filter';
import Trip from './Trip';
import Plan from './Plan';

function App() {
  return (
    <div className="App">
      <Navigation />
      <Header />
      <Collections />
      <Filter />
      <Plan />
      <Trip />
    </div>
  );
}

export default App;
