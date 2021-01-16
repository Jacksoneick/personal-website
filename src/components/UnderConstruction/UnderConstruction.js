import React from 'react';
import PropTypes from 'prop-types';
import './UnderConstruction.css';
import UnderConstructionImage from '../../images/under-construction.jpg';

const UnderConstruction = () => (

    <div className="UnderConstruction">
      <img src={UnderConstructionImage}/>
  </div>
);

UnderConstruction.propTypes = {};

UnderConstruction.defaultProps = {};

export default UnderConstruction;
