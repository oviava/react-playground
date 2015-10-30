import React, {Component, PropTypes} from 'react';

class App extends Component {
  static propTypes = {
    children: PropTypes.object,
  }

  render() {
    const {children} = this.props;
    return (
      <div>
        <h1>Hello from App !</h1>
        {children}
      </div>
    );
  }
}

export default App;
