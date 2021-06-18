import React from 'react';
const Card = ({id, name, email}) =>{
    return (
        <div className="bg-light-green dib br3 pa3 ma2 grow tc">
            <img alt="Photos" src={`https://robohash.org/${id}`}/>
            <h3>{name}</h3>
            <p>{email}</p>
        </div>
    )
}
export default Card;