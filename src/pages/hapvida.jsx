import React, { Fragment } from 'react';
import Header from '../components/header';
import Main from '../components/main';
import Footer from '../components/footer';
import '../styles/style.css';
import '../styles/bulma.css';
import '../styles/media-querys.css';

export default function Hapvida() {
	return (
		<Fragment>
			<Header />
			<Main />
			<Footer />
		</Fragment>
	);
}