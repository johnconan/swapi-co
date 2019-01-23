import React, { Component } from 'react';
import Spinner from '../spinner';
import ErrorLoad from '../error-indicator';

const withData = (View, getData) => {
    return class extends Component {
  
      state = {
        data: null,
        error: false,
        loading: true
      }
    
      componentDidMount() {
        
        getData()
          .then((data) => {
            this.setState({ 
              data,
              loading: false
             });
          })
          .catch(() => {
            this.setState({
              error: true,
              loading: false
            })
          })
      }
  
      render() {
  
      const { data, loading, error } = this.state;
  
      if (loading) {
        return <Spinner />
      }
      if (error) {
        return <ErrorLoad/>
      }
  
        return (
          <View {...this.props} data={data} />
        );
  
      }
    }
}

export default withData;

