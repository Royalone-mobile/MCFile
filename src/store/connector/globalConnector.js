import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { actions } from '../../store/modules';

export default WrapperComponent => {
  class BaseConnector extends Component {
    render() {
      return <WrapperComponent {...this.props} />;
    }
  }

  function mapStateToProps(state) {
    let { auth } = state;
    return {
      auth
    };
  }

  function mapDispatchToProps(dispatch) {
    return {
      authActions: bindActionCreators(actions.auth, dispatch)
    };
  }

  return connect(
    mapStateToProps,
    mapDispatchToProps
  )(BaseConnector);
};
