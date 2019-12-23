import React from 'react';
import Card from './Card';

const CardList= ({monsters}) =>{

    return(
        <div>
            { 
            monsters.map((user,i) =>
                {    
                    return(
                            <Card id={monsters[i].id} name={monsters[i].name} email={monsters[i].email}/>
                        )
                }
                )
            }
        </div>
    )

};
    
export default CardList;