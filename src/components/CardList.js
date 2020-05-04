import React from "react";
import Card from './Card';

const CardList = ({robotsData}) => {
    return(
        <div>
            {
                robotsData.map(({id, name, email}) => {
                    return <Card key={id} id={id} name={name} email={email}/>
                })
            } 
        </div>
    );
}

export default CardList;