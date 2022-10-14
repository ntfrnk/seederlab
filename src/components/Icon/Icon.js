import { icons } from '../../services/Icons';
import './Icon.scss';

const Icon = (props) => {

    let defaultProps = {
        name: '',
        size: 20,
        vp: 30,
        color: '#000',
        style: {}
    };

    defaultProps = { ...defaultProps, ...props };

    const paths = icons[defaultProps.name];

    return (
        <>
            <svg version="1.1" xmlns="http://www.w3.org/2000/svg" width={defaultProps.size} height={defaultProps.size} viewBox={ `0 0 ${defaultProps.vp} ${defaultProps.vp}` } style={defaultProps.style}>
                { paths.map((path, key) => <path key={key} d={path} fill={ defaultProps.color }></path>) }
            </svg>
        </>
    );
}

export default Icon;