import PropTypes from 'prop-types';
import './Details.css';

const Details = (props) => {
    const { nom, age } = props;

    return (
        <>
            <p className='nom'>Bienvenue {nom} sur l'application React</p>
            <p className='age'>Vous avez {age} ans</p>
        </>



    );
};

// Utilisation de propTypes pour définir les types des props
Details.propTypes = {
    nom: PropTypes.string,
    age: PropTypes.number,
};

Details.defaultProps = {
    age: 18
};


export default Details;
