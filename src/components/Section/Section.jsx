import s from './Section.module.css';
import PropTypes from 'prop-types';

const Section = ({ tittle, children}) => {
    return (
        <section className ={s.section}>
            <h1>{tittle}</h1>
            {children}
        </section>
    )        
}

//---------------------
export default Section;
// -------------------

Section.propTypes = {
    children : PropTypes.node
}