import React from 'react';

import classes from './Person.css';

const person = props => {
    console.log('[Person.js] rendering...')
    return (
        <div className={classes.Person} >
            <p onClick={props.click}>
                I'm {props.name} and I am {props.age}
            </p>
            <p>{props.children}</p>
            <input type="text" onChange={props.changed} value={props.name} /> 
        </div>
    );
};

export default person;



//<p>I'm a Person and I am {Math.floor(Math.random() * 30)} years old!</p>