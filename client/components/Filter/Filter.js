import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import Checkbox from 'components/Checkbox/Checkbox';
import styles from './Filter.css';


export default class Filter extends PureComponent {
  constructor() {
    super();
    this.state = {
      prices: [{ value: 1, label: '$', checked: false }, { value: 2, label: '$$', checked: false }, { value: 3, label: '$$$', checked: false }, { value: 4, label: '$$$$', checked: false }],
    };
  }
  static propTypes = {
    action: PropTypes.func,
  };

  handleOnChangeAction = (e, index) => {
    const prices = this.state.prices.concat();
    prices[index].checked = !prices[index].checked;
    this.setState({ prices });
    const selected = () => {
      const tmpArr = [];
      for (let i = 0; i < prices.length; i++) {
        if (prices[i].checked === true) {
          tmpArr.push(prices[i].value);
        }
      }
      return tmpArr.join(',');
    };
    this.props.action(selected());
  }

  render() {
    const prices = this.state.prices;
    return (
      <div className={styles.root}>
        <span>Price Filter:</span>
        <ul>
          {
            prices.map((element, index) => {
              return (
                <li key={index}>
                  <Checkbox defaultValue={element.value} defaultLabel={element.label} onChangeAction={(e) => { this.handleOnChangeAction(e, index); }}></Checkbox>
                </li>
              );
            })
          }
        </ul>
      </div>
    );
  }
}
