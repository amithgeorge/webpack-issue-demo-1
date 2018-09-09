import React from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types'; // ES6


export class A extends React.Component {
  val(){
    return "instance of A";
  }
}

// if we comment out the propTypes below, the class A is eliminated from the bundle
A.propTypes = {
  value: PropTypes.string
}


class B extends React.Component {
  val(){
    return "instance of B";
  }
}


// if we comment out the connect, then class B is also eliminated from the bundle
const ConnectedB = connect(null, null)(B);

export {B, ConnectedB};

export class C {
  val(){
    return "instance of C";
  }
}