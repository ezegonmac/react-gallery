import React, { Component } from 'react';

class Searcher extends Component {
    state = {  } 
    render() { 
        return (
            <form>
                <div className="row">
                    <div className="form-group col-md-11">
                        <input type="text" className="form-control form-control-lg" placeholcer="Search your image. Example: Football"></input>
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