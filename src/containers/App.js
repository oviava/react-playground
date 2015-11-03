import React, {Component, PropTypes} from 'react';

// CSS
import 'app.css';
import 'material-design-iconic-font.css';

class App extends Component {
  static propTypes = {
    children: PropTypes.object,
  }

  render() {
    return (
      <div>Hello World!</div>
    );
  }
}

export default App;
