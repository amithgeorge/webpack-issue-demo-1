import React from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types'; // ES6


export class A extends React.Component {
  val(){
    return "instance of A";
  }
}

// A.propTypes = {
//   value: PropTypes.string
// }

// if we comment out the propTypes above, the class A is eliminated from the bundle

class B extends React.Component {
  val(){
    return "instance of B";
  }
}

// export const ConnectedB = connect(null, null)(B);
// if we comment out the above connect, then class B is also eliminated from the bundle

export {B};

export class C {
  val(){
    return "instance of C";
  }
}