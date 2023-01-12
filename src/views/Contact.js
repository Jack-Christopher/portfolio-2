import { Typography } from 'antd';

export default function Contact(props) {

    if (props.current !== '4') {
        return null;
    }

    return (
        <div className="container">
            <Typography.Title>
                Contact Me
            </Typography.Title>
        </div>
    );
}