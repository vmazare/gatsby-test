import Link from 'gatsby-link'
import qs from 'qs'
import classnames from 'classnames'
import React, { Component } from 'react'
import styles from './../styles/page-2.module.css'

export class SecondPage extends Component {
	render() {
		const {location: {search}} = this.props
		const foo = search && qs.parse(search, { ignoreQueryPrefix: true }).foo
		
		// foo is always truthy
		console.log('foo', foo);
		
		const className = classnames(styles.box, foo ? styles.img : styles.color)
		return <div className={className}></div>
	}
}



export default SecondPage
