import React, { PureComponent } from 'react';

import { Link } from 'react-router-dom';

class About extends React.Component {
    // #region lifecycle
    render() {
      return (
        <div>
          
              <h1>About</h1>
              <p>
                <Link className="btn btn-success btn-lg" to={'/'}>
                  Home
                </Link>
              </p>
          
        </div>
      );
    }
    // #endregion
  }
  
  export default About;