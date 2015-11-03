import React, {Component, PropTypes} from 'react';
import Slides from '../components/Slides';

// CSS
import 'app.css';
import 'material-design-iconic-font.css';

class App extends Component {
  static propTypes = {
    children: PropTypes.object,
  }

  render() {
    return (
      <Slides/>
    );
  }
}

export default App;
