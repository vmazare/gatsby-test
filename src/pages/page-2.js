import Link from 'gatsby-link'
import qs from 'qs'
import { addUrlProps, UrlQueryParamTypes } from 'react-url-query';
import React, { Component } from 'react';

const urlPropsQueryConfig = {
  foo: { type: UrlQueryParamTypes.string }
};

export class SecondPage extends Component {
	render() {
		console.log('foo__', foo);
		const {foo} = this.props;
		if(!foo) {
			return (
				<div style={{backgroundColor: 'red'}}>No foo!</div>
			);	
		}
		return <div style={{backgroundColor: 'green'}}>Yes foo!</div>
		
	}
}



export default addUrlProps({ urlPropsQueryConfig })(SecondPage);
