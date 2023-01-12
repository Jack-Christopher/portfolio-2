import { Typography } from 'antd';

export default function Skills(props) {

    if (props.current !== '2') {
        return null;
    }

    return (
        <div className="container">
            <Typography.Title>
                Skills
            </Typography.Title>
        </div>
    );
}