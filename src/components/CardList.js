import React from 'react';
import Card from './Card';

const CardList= ({monsters}) =>{
    return(                             // used mapping iteration to transform the array and cardList molecule is returned
        <div>
            { 
            monsters.map((user,i) =>
                {    
                    return(
                            <Card key={monsters[i].id} id={monsters[i].id} name={monsters[i].name} email={monsters[i].email} username={monsters[i].username}/>
                        )
                }
                )
            }
        </div>
    )

};
    
export default CardList; 