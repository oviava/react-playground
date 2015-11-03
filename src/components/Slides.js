import React, {Component, PropTypes} from 'react';
import {connect} from 'react-redux';
import Slide from './Slide';
import {nextSlide, prevSlide} from '../actions';

class Slides extends Component {
  static propTypes = {
    slideIndex: PropTypes.number.isRequired,
    dispatch: PropTypes.func.isRequired,
  }

  constructor(props) {
    super(props);
  }

  handleKey(event) {
    const {dispatch} = this.props;
    if (event.keyCode === 32) {
      dispatch(nextSlide());
    }
    if (event.keyCode === 13) {
      dispatch(prevSlide());
    }
  }

  render() {
    const {slideIndex} = this.props;
    return (
        <Slide index={slideIndex} />
    );
  }
}

export default connect(state => ({slideIndex: state.slideIndex}))(Slides);
