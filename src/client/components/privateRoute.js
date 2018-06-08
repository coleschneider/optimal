import React, { Component } from 'react';
import { Route, Redirect, withRouter } from 'react-router-dom';





class PrivateRoute extends Component {
    // #region lifecycle
    isAuthenticated() {
        // const checkUserHasId = user => user && user.id;
        const token = localStorage.getItem('jwt')
        // const user = auth.getUserInfo() ? auth.getUserInfo() : null;
        const isAuthenticated = !token ? false : true
        return isAuthenticated;
      }
    
      isExpired() {
        return auth.isExpiredToken(auth.getToken());
      }
    render() {
      const { component: InnerComponent, ...rest } = this.props;
      const { location } = this.props;
  
      const isUserAuthenticated = this.isAuthenticated();
      const isTokenExpired = false; // this.isExpired();
  
      return (
        <Route
          {...rest}
          render={props =>
            !isTokenExpired && isUserAuthenticated ? (
              <InnerComponent {...props} />
            ) : (
              <Redirect to={{ pathname: '/login', state: { from: location } }} />
            )
          }
        />
      );
    }
    }
    // #endregion
  
  
  export default withRouter(PrivateRoute);