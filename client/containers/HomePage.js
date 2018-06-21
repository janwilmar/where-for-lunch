import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Button from 'components/Button/Button';
import placeActions from 'actions/placeActions';
import conditionActions from 'actions/conditionActions';
import Place from 'components/Place/Place';
import Condition from 'components/Condition/Condition';
// import Filter from 'components/Filter/Filter';

class HomePage extends Component {
  handleOnClick = () => {
    this.props.fetchPlaces(this.props.condition);
  }

  handleOnConditionChange = (value) => {
    this.props.setRadius(value);
  }

  handleOnFilterSelection = (value) => {
    this.props.setPrice(value);
  }

  render() {
    const { condition, place } = this.props;
    return (
      <div className="homePageWrapper">
        <Place place={place} />
        <div className="searchWrapper">
          {/* <Filter action={this.handleOnFilterSelection} /> */}
          <Condition condition={condition} action={this.handleOnConditionChange} actionChange={this.handleOnFilterSelection} />
          <Button onClick={this.handleOnClick} theme={'homepageClick'} disabled={!(Object.keys(condition)).some(v => ['latitude', 'longitude'].includes(v))} />
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  condition: state.condition,
  place: state.place,
});

const mapDispatchToProps = dispatch =>
  bindActionCreators({
    fetchPlaces: placeActions.fetchPlaces,
    setRadius: conditionActions.setRadius,
    setPrice: conditionActions.setPrice,
  }, dispatch);

HomePage.propTypes = {
  condition: PropTypes.object,
  place: PropTypes.object,
  fetchPlaces: PropTypes.func,
  setRadius: PropTypes.func,
  setPrice: PropTypes.func,
};
export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(HomePage);
