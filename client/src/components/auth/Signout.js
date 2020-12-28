import React from 'react';
import { connect } from 'react-redux';
import { signout } from '../../actions';

class Signout extends React.Component {
  componentDidMount() {
    this.props.signout();
  }

  render() {
    return <div>Sorry to see you go</div>;
  }
}

export default connect(null, { signout })(Signout);
