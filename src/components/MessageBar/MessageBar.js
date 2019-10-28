import React from 'react';

export class MessageBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = { value: '' };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(event) {
    //alert('A name was submitted: ' + this.state.value);
    this.setState({datas:this.state.value})
    event.preventDefault();
  }

  handleChange(event) {
    this.setState({ value: event.target.value });
  }


  render() {
    return (
      <div className="App">
        <form onSubmit={this.handleSubmit}>
          <input value={this.state.value} onChange={this.handleChange} type="text" name="name" />
          <input type="submit" value="Envoyer" />
        </form>
      </div>
    );
  }
}

export default MessageBar;
