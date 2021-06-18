import React from 'react';

const SearchBox = ({searchChange}) =>{
    return (
        <div>
            <input 
            className="pa3 ba b--green bg-lightest-blue"
            type="search"
            placeholder="Enter robo name"
            onChange = {searchChange} // event when input change the value => event
            />
        </div>
    )
}
export default SearchBox;