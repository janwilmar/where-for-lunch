import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import placeActions from 'actions/placeActions';
import PlaceDetails from 'components/PlaceDetails/PlaceDetails';
import PlaceMap from 'components/PlaceMap/PlaceMap';


class DetailsPage extends Component {
  componentDidMount = () => {
    this.props.fetchDetails(this.props.match.params.id);
  }

  render() {
    const { place } = this.props;
    return (
      <div className="homePageWrapper">
        <PlaceDetails place={place} />
        <div className="searchWrapper">
          <PlaceMap place={place} />
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  place: state.place,
});

const mapDispatchToProps = dispatch =>
  bindActionCreators({
    fetchDetails: placeActions.fetchDetails,
  }, dispatch);

DetailsPage.propTypes = {
  match: PropTypes.object,
  place: PropTypes.object,
  fetchDetails: PropTypes.func,
};
export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(DetailsPage);
