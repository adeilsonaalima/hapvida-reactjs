// DEPENDENCIES
import React, { Fragment, useState, useEffect } from 'react';

export default function Cover(props) {

	return (
		<Fragment>
			<div className="message is-link is-fullwidth">
				<div className="message-header">
		    	<p>Cobertura</p>
		  	</div>
		  	<div className="message-body has-text-black has-text-justify">
					<ul>
						{props.cover.map(item => <li key={item}>{item}</li>)}
					</ul>
		  	</div>
			</div>
		</Fragment>
	);
}