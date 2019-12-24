import React from 'react';
 

//custom defined arrow function for the Card component
const Card=(props)=>
{
    const {name,email,id,username}=props; // Destructuring
    return(             //using tachyons classNames for decorating the card||using new random image by request through API||Name,email and username under the image 
        <div className="tc bg-light-red br3 dib pa3 mh3 mv2 grow bw2 shadow-5"> 
            <img src={`https://robohash.org/${id}?set=set2`} alt="Monsters"></img>
            <div>
                <h2>{name}</h2>
                <p>{email}</p>
                <p className="underline">{username}</p>''
            </div>
        </div>
         
    );
}

export default Card;