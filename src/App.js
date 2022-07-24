import { Component } from 'react';
import './bootstrap.min.css';
import Searcher from './components/Searcher';
import Result from './components/Result';

class App extends Component {

  state = {
    term : '',
    images : [],
    page: ''
  }

  API_KEY = process.env.REACT_APP_API_KEY;

  scroll = () => {
    const elem = document.querySelector('.jumbotron');
    elem.scrollIntoView("smooth", "start")
  }

  prevPage = () => {
    let page = this.state.page;

    if(page === 1) return null;

    page--;

    this.setState({
      page
    }, () => {
      this.fetchAPI();
      this.scroll();
    });

    // console.log("Prev... " + page)
  }
  
  nextPage = () => {
    let page = this.state.page;

    page++;

    this.setState({
      page
    }, () => {
      this.fetchAPI();
      this.scroll();
    });

    // console.log("Next... " + page)
  }
    
  fetchAPI = () => {
    const perPage = 30;
    const page = this.state.page;
    const url = `https://pixabay.com/api/?key=${this.API_KEY}&q=${this.state.term}&per_page=${perPage}&page=${page}`

    fetch(url)
      .then(res => res.json())
      .then(res => this.setState({ images : res.hits }))
  }

  searchData = (term) => {
    
    this.setState({
      term: term,
      page: 1
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
      <div className="row justify-content-center">
        <Result
          images={this.state.images}
          prevPage={this.prevPage}
          nextPage={this.nextPage}/>
      </div>
    </div>
    );
}

}

export default App;
