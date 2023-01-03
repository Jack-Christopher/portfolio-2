import React from 'react';

export default function Home(props) {

    if (props.current !== '1') {
        return null;
    }

    return (
        <div>
            <h1> Hi there! </h1>
            <h2> I'm a full stack web developer. </h2>
            <p> I'm a full stack web developer with a passion for learning new technologies. I'm currently working on a few projects, and I'm always looking for new opportunities. </p>
        </div>
    );
}