import React from 'react';

const Pagination = (props) => {

    return(
        <div className="py-3 d-flex justify-content-center">
            <button onClick={props.prevPage} type="button" className="btn btn-info m-1"> Previous &#8592; </button>
            <button onClick={props.nextPage} type="button" className="btn btn-info m-1"> &#8594; Next </button>
        </div>
    )
}

export default Pagination