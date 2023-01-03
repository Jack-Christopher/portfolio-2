import { Menu } from 'antd';
import { AiOutlineGithub, AiOutlineLinkedin } from 'react-icons/ai';


export default function Navbar(props) {
    return (
            <Menu
                theme="dark"
                mode="horizontal"
                defaultSelectedKeys={['1']}
                onSelect={ (e) => {
                    console.log(e.key);
                    if (e.key > 4) {
                        return;
                    }
                    props.setCurrentView(e.key);
                }}
                style={{ lineHeight: '64px', display: 'block', fontSize: '18px' }}
            >
                <Menu.Item key="1" style={{paddingLeft: '40px'}}>Home</Menu.Item>
                <Menu.Item key="2">My Skills</Menu.Item>
                <Menu.Item key="3">My Projects</Menu.Item>
                <Menu.Item key="4">Contact Me</Menu.Item>

                
                <Menu.Item key="6">
                    <a href="https://www.linkedin.com/in/jack-christopher-huaihua-huayhua" target="_blank" rel='noreferrer'>
                        <AiOutlineLinkedin size={30} />
                    </a>
                </Menu.Item>
                <Menu.Item key="7">
                    <a href="https://github.com/Jack-Christopher" target="_blank" rel='noreferrer'>
                        <AiOutlineGithub size={30} />
                    </a>
                </Menu.Item>
            </Menu>
    );
}