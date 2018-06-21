import React from 'react';
import PropTypes from 'prop-types';
import styles from './PlaceMap.css';

const PlaceMap = ({ place }) => {
  const coor = place.coordinates;
  return (
    <div className={styles.root}>
      {coor &&
        <iframe className={styles.map}
          src={`https://maps.google.com/maps?q=${coor.latitude},${coor.longitude}&hl=es;z=14&output=embed`}
        >
        </iframe>
      }
    </div>
  );
};

PlaceMap.propTypes = {
  place: PropTypes.object,
};

export default PlaceMap;
