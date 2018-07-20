import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { ItemTypes } from '../Constants';
import { DragSource } from 'react-dnd';

const knightSource = {
  beginDrag(props) {
    return {};
  }
};

function collect(connect, monitor) {
  return {
    connectDragSource: connect.dragSource(),
    isDragging: monitor.isDragging()
  };
}

class Knight extends Component {
  render() {
    const { connectDragSource, isDragging } = this.props;
    return connectDragSource(
      <div
        style={{
          opacity: isDragging ? 0.7 : 1,
          cursor: 'move',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center'
        }}
      >
        <div className="w-knight" />
      </div>
    );
  }
}

Knight.propTypes = {
  connectDragSource: PropTypes.func.isRequired,
  isDragging: PropTypes.bool.isRequired
};

export default DragSource(ItemTypes.KNIGHT, knightSource, collect)(Knight);
