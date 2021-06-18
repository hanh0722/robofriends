import React from 'react';
import Card from './Card';

const CardList = ({Robots}) =>{
// we need to save the data to one array to render it into parent div return   -> one way data flow
    const CardComponent = Robots.map((items, i) =>{
        return <Card key={i} id = {Robots[i].id} name = {Robots[i].name} email = {Robots[i].email}/>;
    });
    return (
       <div className="tc">
           {CardComponent};
       </div> 
    )
}
export default CardList;

