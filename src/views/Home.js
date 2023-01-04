import React from 'react';
import { Typography } from 'antd';

import TypewriterHelper from '../components/TypewriterHelper';
import '../styles/Home.css';


export default function Home(props) {

    if (props.current !== '1') {
        return null;
    }

    return (
        <div className="container">
            <Typography.Title> 
                <TypewriterHelper text="Hi there!" delay={100} />
            </Typography.Title>
            <Typography.Title level={2}> 
                <TypewriterHelper text="I'm Jack Christopher" delay={100} />
            </Typography.Title>
            <Typography.Title level={3}>
                <TypewriterHelper text="I'm a Full Stack Web Developer" delay={100} />
            </Typography.Title>
        </div>
    );
}