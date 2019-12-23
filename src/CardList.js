import React from 'react';
import Card from './Card';
import { monsters } from './monsters';

const CardList= ({robots}) =>{

    return(
        <div>
            { 
            monsters.map((user,i) =>
                {    
                    return(
                            <Card id={monsters[i].id} name={monsters[i].name} email={monsters[i].name}/>
                        )
                }
                )
            }
        </div>
    )

};
    
export default CardList;