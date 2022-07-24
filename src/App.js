import { Component } from 'react';
import './bootstrap.min.css';
import Searcher from './components/Searcher';
import Result from './components/Result';

class App extends Component {

  state = {
    term : '',
    images : []
  }

  API_KEY = process.env.REACT_APP_API_KEY;
    
  fetchAPI = () => {
    const perPage = 30;
    const url = `https://pixabay.com/api/?key=${this.API_KEY}&q=${this.state.term}&per_page=${perPage}`

    fetch(url)
      .then(res => res.json())
      .then(res => this.setState({ images : res.hits }))
  }

  searchData = (term) => {
    
    this.setState({
      term
    }, () => {
      this.fetchAPI()
    })
  }

  render() {

    return (
      <div className="app container">
      <div className="jumbotron">
        <p className="lead text-center">Image Searcher</p>
        <Searcher 
          message="Buscador..."
          searchData={this.searchData} />
      </div>
      <Result
        images={this.state.images}/>
    </div>
    );
}

}

export default App;
