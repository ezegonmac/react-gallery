import React, { Component, createRef } from 'react';

class Searcher extends Component {

    searchRef = createRef();

    handleSearch = (e) => {
        e.preventDefault();

        // console.log(this.searchRef.current.value);

        const term = this.searchRef.current.value;

        // Send value to principal component
        this.props.searchData(term);
    }

    render() { 
        return (
            <form onSubmit={this.handleSearch}>
                <div className="row">
                    <div className="form-group col-md-11">
                        <input ref={this.searchRef} type="text" className="form-control form-control-lg" placeholcer="Search your image. Example: Football"></input>
                    </div>
                    <div className="form-group col-md-1">
                        <input type="submit" className="btn btn-lg btn-danger btn-block" value="Search"></input>
                    </div>
                </div>
            </form>
        );
    }
}
 
export default Searcher;