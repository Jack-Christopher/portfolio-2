import { Typography } from 'antd';

export default function Projects(props) {

    if (props.current !== '3') {
        return null;
    }

    return (
        <div className="container">
            <Typography.Title>
                Projects
            </Typography.Title>
    </div>
    );
}