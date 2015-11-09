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
      <h1>Hello World!</h1>
    );
  }
}

export default App;
