import PropTypes from 'prop-types';

const Button = ({ color, colorText, text }) => {

    const styles = {
        backgroundColor: color,
        color: colorText
    }

    return (
        <button style={styles} type='button' className='btn'> {text} </button>
    )
}

Button.defaultProps = {
    color: 'red',
    colorText: 'white',
    text: 'add'
}

Button.propTypes = {
    color: PropTypes.string,
    colorText: PropTypes.string,
    text: PropTypes.string
}


export default Button;