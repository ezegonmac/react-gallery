import './bootstrap.min.css';
import Searcher from './components/Searcher';

function App() {
  return (
    <div className="app container">
      <div className="jumbotron">
        <p className="lead text-center">Image Searcher</p>
        <Searcher/>
      </div>
    </div>
  );
}

export default App;
