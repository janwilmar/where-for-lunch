import React from 'react';
import PropTypes from 'prop-types';
import styles from './PlaceDetails.css';

const PlaceDetails = ({ place }) => {
  let photos = null;
  const phts = place.photos;
  if (phts) {
    photos = phts.map((img, idx) => {
      return <img key={idx} src={img} className={styles.morePhotos} />;
    });
  }
  return (
    <div className={styles.root}>
      <div className={styles.name}>{ place.name }</div>
      <div className={styles.box}>
        <div>
          {place.img && <img src={place.img} className={styles.mainImg} />}
        </div>
        <div>{ place.address }</div>
        <div>{ place.phone }</div>
        <div>{ place.categories && place.categories.join(', ') }</div>
        <div>{ place.price }</div>
        { place.rating &&
        <div className={styles.rating}>
          <div className={styles.ratingScore}>{ place.reviewCount } reviews</div>
          <div className={styles.stars}>
            <div className={styles.emptyStars}></div>
            <div className={styles.fullStars} style={{ width: `${place.rating / 5 * 100}%` }}></div>
          </div>
        </div>
        }
        <div>{ photos }</div>
      </div>
    </div>
  );
};

PlaceDetails.propTypes = {
  place: PropTypes.object,
};

export default PlaceDetails;
