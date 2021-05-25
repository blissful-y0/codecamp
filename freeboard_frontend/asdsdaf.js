import {Component} from 'react';

export default class hi extends Component {
  constructor(props) {
    super(props);
    this.state = {counter: 0, hello: 'bye'};
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    const temp = this.state.counter;
  }

  render() {
    return <button onClick={this.handleClick}></button>;
  }
}
