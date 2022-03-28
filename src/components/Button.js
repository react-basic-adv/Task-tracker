import PropTypes from 'prop-types';

const Button = ({ color, colorText, text, onClick }) => {


    // const onClick = () => {
    //     console.log("click");
    // }

    const styles = {
        backgroundColor: color,
        color: colorText
    }

    return (
        <button onClick={onClick} style={styles} type='button' className='btn'> {text} </button>
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
    text: PropTypes.string,
    onClick: PropTypes.func
}


export default Button;