import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import Input from 'components/Input/Input';
import Checkbox from 'components/Checkbox/Checkbox';
import styles from './Condition.css';

export default class Condition extends PureComponent {
  constructor() {
    super();
    this.state = {
      prices: [{ value: 1, label: '$', checked: false }, { value: 2, label: '$$', checked: false }, { value: 3, label: '$$$', checked: false }, { value: 4, label: '$$$$', checked: false }],
    };
  }
  static propTypes = {
    condition: PropTypes.object,
    action: PropTypes.func,
    actionChange: PropTypes.func,
  };

  handleOnBlurAction = (e) => {
    this.props.action(e.target.value);
  }

  handleOnChangeAction = (e, index) => {
    const { prices } = this.state;
    prices[index].checked = !prices[index].checked;
    this.setState({ prices });
    const tmpArr = [];
    for (let i = 0; i < prices.length; i++) {
      if (prices[i].checked === true) {
        tmpArr.push(prices[i].value);
      }
    }

    this.props.actionChange(tmpArr.join(','));
  }

  render() {
    const { condition: { radius } } = this.props;
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
        <span>radius:</span>
        <Input defaultValue={radius} onBlurAction={this.handleOnBlurAction}></Input>
        <span>meters</span>
      </div>
    );
  }
}
