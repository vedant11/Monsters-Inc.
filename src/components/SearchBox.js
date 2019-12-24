import React from 'react';

const SearchBox=({searchChange})=>
{
    return(                                         //returning a searchbox
        <input
            type="search" 
            placeholder="Search your monster"
            className="tc flex center mv3 bg-lightest-blue br3 ba b--green " 
            onChange={searchChange}>
         </input>
    )
}

export default SearchBox;