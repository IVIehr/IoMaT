import React from 'react';

const SearchBox = ({value, onchange, onsubmit}) => {
    return ( 
        <form class="input-group mb-3" onSubmit={onsubmit}>
            <input 
                type="text"
                value={value}
                className="form-control"
                placeholder='جستجوی آموزش...'
                aria-label="Recipient's username"
                onChange={e => onchange(e.currentTarget.value)}
                aria-describedby="button-addon2"/>
            <button 
                className="btn btn-success"
                type="submit"
                id="button-addon2"
                >جستجو
            </button>
        </form>
     );
}
 
export default SearchBox;