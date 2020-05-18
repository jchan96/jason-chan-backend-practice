import React, { Component } from "react";
import { connect } from "react-redux";
import { addItem } from "../actions/itemActions";
// import uuid from "uuid/v4";

class Prompt extends Component {
  state = {
    prompt: false,
    input1: "",
  };

  toggle = () => {
    this.setState({
      prompt: !this.state.prompt,
    });
  };

  onChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  onSubmit = (e) => {
    e.preventDefault();

    const newItem = {
      //   id: uuid(),
      input0: this.state.input0,
    };

    this.props.addItem(newItem);

    this.toggle();
  };

  render() {
    return (
      <div>
        {/* <button
          className="AddCommentBtn"
          style={{
            background: "yellow",
            margin: "2rem 0rem"
          }}
          onClick={() => {
            const input0 = prompt("Enter input: ");
            if (input0) {
              this.setState(state => ({
                items: [...state.items, { id: uuid(), input0 }]
              }));
            }
          }}
        >
          Add Comment
        </button> */}

        <button style={{ width: "100%" }} onClick={this.toggle}>
          <div isOpen={this.state.prompt} toggle={this.toggle}>
            <div toggle={this.toggle}></div>
            <form onSubmit={this.onSubmit}>
              <label for="item">Enter Todo's here: </label>
              <input
                type="text"
                name="input0"
                id="item"
                placeholder="here..."
                onChange={this.onChange}
              ></input>
              <br />
              <button>ENTER</button>
            </form>
          </div>
        </button>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  item: state.item,
});

export default connect(mapStateToProps, { addItem })(Prompt);
