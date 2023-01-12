import React from 'react';
import { Layout } from 'antd';

import Home from './Home';
import Skills from './Skills';
import Projects from './Projects';
import Contact from './Contact';
import Navbar from '../components/Navbar';

// import '../functions/Main.js';
import AnimatedCursor from "react-animated-cursor"

const { Header, Content } = Layout;

class Main extends React.Component {
    // current view
    // 1. Home
    // 2. Skills
    // 3. Projects
    // 4. Contact
    

    constructor(props) {
        super(props);
        this.state = {
            currentView: '1'
        };
    }

    setCurrentView = (view) => {
        this.setState({currentView: view});
    }
    
    // render just the current view

    render() {
        return (
            <Layout>
                <AnimatedCursor
                    innerSize={8}
                    outerSize={8}
                    color='80, 80, 80'
                    outerAlpha={0.2}
                    innerScale={1}
                    outerScale={10}
                    clickables={[
                        'il',
                        // 'input[type="text"]',
                        // 'input[type="email"]',
                        // 'input[type="number"]',
                        // 'input[type="submit"]',
                        // 'input[type="image"]',
                        // 'label[for]',
                        // 'select',
                        // 'textarea',
                        // 'button',
                        // '.link'
                    ]}
                    />
                <Header>
                    <Navbar current={this.state.currentView} setCurrentView={this.setCurrentView} />
                </Header>
                <Content>
                    <Home current={this.state.currentView} />
                    <Skills current={this.state.currentView} />
                    <Projects current={this.state.currentView} />
                    <Contact current={this.state.currentView} />
                </Content>
            </Layout>
        );        
    }
}

export default Main;
            