import React, { Component } from 'react';
import { connect } from 'react-redux';



class User extends Component {

  render() {
    const { metaData } = this.props;
    return (
      <>
   
      
      </>
    )
  }

}

const mapStateToProps = state => ({
    metaData: state.metaData 
})

const mapDispatchToProps = dispatch => ({
})

export default connect(mapStateToProps, mapDispatchToProps)(User);
