// DEPENDENCIES
import React, { Fragment } from 'react';

// COMPONENTS
import Header from '../components/header';
import Main from '../components/main';
import Footer from '../components/footer';

// CSS
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