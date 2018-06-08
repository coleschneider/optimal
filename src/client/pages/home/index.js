import React, { PureComponent } from 'react';

import { Link } from 'react-router-dom';

class Home extends React.Component {
    // #region lifecycle
    render() {
      return (
        <div>
          
              
              
              <h1>Home Page</h1>
              <p>
                <Link className="btn btn-success btn-lg" to={'/about'}>
                  About
                </Link>
              </p>
          
        </div>
      );
    }
    // #endregion
  }
  
  export default Home;