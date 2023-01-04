import Typewriter from 'typewriter-effect';

export default function TypewriterHelper(props) {
    return (
        <Typewriter
            options={{
                cursor: '▄',
                delay: props.delay,                
            }}
            onInit={(typewriter) => {
                typewriter
                    .typeString(props.text)
                    .start();
            }}
        />
    );
}