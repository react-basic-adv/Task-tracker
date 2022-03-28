import Proptypes from 'prop-types';
import Button from './Button';

const Header = ({ title, onShow, showTask}) => {


    return (

        <header className='card-header'>
            <div className='d-flex justify-content-between'>
                <h1> {title}</h1>
                <Button onClick={onShow} color={!showTask ? 'green' : 'red'} text={ showTask ? 'Close' : 'Add' } />
            </div>

        </header>
    );

}

Header.propTypes = {
    title: Proptypes.string.isRequired
}

// propiedades por defecto
Header.defaultProps = {
    title: 'Task tracker'
}




export default Header;