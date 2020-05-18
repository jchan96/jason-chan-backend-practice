import React, { Component } from "react";
// import uu_id from "uuid/v4";

import { connect } from "react-redux";
import { getItems, deleteItem } from "../actions/itemActions";
import PropTypes from "prop-types";

import { addItem } from "../actions/itemActions";

class Body extends Component {
  // state = {
  //   items: [
  //     { _id: uu_id(), input0: "Noor" },
  //     { _id: uu_id(), input0: "Jim" },
  //     { _id: uu_id(), input0: "Parvaneh" },
  //     { _id: uu_id(), input0: "Russell" }
  //   ]
  // };

  componentDidMount() {
    this.props.getItems();
  }

  onDeleteClick = _id => {
    this.props.deleteItem(_id);
  };

  render() {
    // const items = this.props.item.items;
    const { items } = this.props.item;
    return (
      <main className="Body">
        <div className="List">
          {items.map(({ _id, input0 }) => (
            <div
              key={_id}
              style={{
                background: "yellow",
                margin: "1rem 0rem",
                padding: "0.5rem",
                border: "1px solid black",
                display: "flex",
                justifyContent: "space-between"
              }}
              className="ListItem"
            >
              {input0}
              <button
                style={{
                  background: "black",
                  color: "yellow",
                  margin: "0rem 1rem 0rem 0rem"
                }}
                className="DeleteBtn"
                onClick={this.onDeleteClick.bind(this, _id)}
              >
                DONE
              </button>
            </div>
          ))}
        </div>
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
                items: [...state.items, { _id: uu_id(), input0 }]
              }));
            }
          }}
        >
          Add Comment
        </button> */}
      </main>
    );
  }
}

Body.propTypes = {
  getItems: PropTypes.func.isRequired,
  item: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  item: state.item
});

export default connect(mapStateToProps, { getItems, deleteItem })(Body);
