import Proptypes from 'prop-types';
import Button from './Button';

const Header = (props) => {

    return (

        <header className='card-header'>
            <div className='d-flex justify-content-between'>
                <h1> {props.title}</h1>
                <Button  color='gray' text='add'/>
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