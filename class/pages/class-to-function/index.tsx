import {Component, createRef, RefObject} from 'react';

class MyClassPage extends Component {
  private inputRef: RefObject<HTMLInputElement>;
  constructor(props) {
    super(props);
    this.state = {};
    this.inputRef = createRef();
  }

  componentDidMount() {
    /// useEffect
    console.log('aaaa');
    this.inputRef.current.focus();
  }

  componentDidUpdate() {
    console.log('bbbb');
  }

  onChangeInput(event) {
    this.setState({
      [event.target.name]: event.target.value,
    });
  }

  render() {
    return (
      <div>
        <span>이름: </span>
        <input
          name="name"
          type="text"
          ref={this.inputRef}
          onChange={this.onChangeInput.bind(this)}
        ></input>
        <br />
        <span>나이: </span>
        <input
          name="age"
          type="number"
          onChange={this.onChangeInput.bind(this)}
        ></input>
        <br />
        <span>학교: </span>
        <input
          name="school"
          type="text"
          onChange={this.onChangeInput.bind(this)}
        ></input>
        <br />
      </div>
    );
  }
}

export default MyClassPage;
