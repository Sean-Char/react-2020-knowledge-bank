import React from 'react';

const person = (props) => {
    return (
        <div>
            <p>I'm {props.name} and I am {props.age}</p>
            <p>{props.children}</p>
        </div>
    )
};

export default person;



//<p>I'm a Person and I am {Math.floor(Math.random() * 30)} years old!</p>