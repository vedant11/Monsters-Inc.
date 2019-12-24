import React from 'react'

//returning child(CardList) with html attribute of scrolling overflow-y(Note:CamelCase conversion while CSS used in JSX)
const Scroll=(props)=>{
    return(
        <div style={{overflowY:'scroll', height:'500px'}}>
            {props.children}
        </div>
    )
}

export default Scroll;