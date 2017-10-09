import React, { Component } from 'react'
import { Paper, Avatar } from 'material-ui'
import Header from '../../components/Header'
import { History } from 'history'
import { User } from '../../domain/model/User'

const collaboration = require('../../assets/collaboration.png')
const email = require('../../assets/email.png')
const phone = require('../../assets/phone.png')
const linkedin = require('../../assets/linkedin.png')

interface Props{
	history: History
	user: User
	logout: (history: History) => void
}

interface State{}

export default class MyProfileLayout extends Component<Props, State>{
	constructor(props: Props) {
		super(props)
		
	}

	render(){
		const { history, logout, user } = this.props
		const isLoggedIn = localStorage.token !== undefined
		const isAdmin = user ? user.isAdmin : false
		console.log(user)

		return (
			<div>
				<Header history={history} isLoggedIn={isLoggedIn} logout={logout} isAdmin={isAdmin}/>
				<Paper style={styles.profileContainer as any} zDepth={1}>
					<div>
						<Avatar src={collaboration} size={100}/>
						<h2>{user.name}</h2>
						<p>Last logged in 2 hours ago</p>
						<p>
							<span>
								<img src={email} alt="Email" />
								<a style={styles.iconText as any}>email address</a>
							</span>
						</p>
						<p>
							<span>
								<img src={phone} alt="Phone" />
								<a style={styles.iconText as any}>mobile phone number</a>
							</span>
						</p>
						<p>
							<span>
								<img src={linkedin} alt="LinkedIn" />
								<a style={styles.iconText as any}>linkedin username</a>
							</span>
						</p>
					</div>
					<div>
						<h2>About</h2>
						<p>This is about the company profile</p>
					</div>
				</Paper>
			</div>
		)
	}
}

const styles = {
	profileContainer: {
		margin: 20,
		padding: 40,
		display: 'flex',
		flex: 1,
		flexDirection: 'column',
		alignItems: 'center',
		textAlign: 'center'
	},
	divList:{
		paddingLeft: 40,
	},
	iconText:{
		paddingLeft: 	10,
		position: 'relative',
		bottom: '5px'
	},
}