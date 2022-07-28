// DEPENDENCIES
import React, { Fragment } from 'react';
import styled from 'styled-components';

// ASSETS
import remove from '../assets/icons/remove.svg'

// STYLED COMPONENTS
const Control = styled.div`
	& > * {
		padding: 0px;
	}
	& > div > .age {
		width: 80px;
	}
`

const RemoveIcon = styled.img`
	filter: brightness(0)
					saturate(100%)
					invert(83%)
					sepia(100%)
					saturate(14%)
					hue-rotate(188deg)
					brightness(113%)
					contrast(104%);
	margin: 0px;
`

export default function Person(props) {

	const price = new Intl.NumberFormat('pt-BR',
	  						{ style: 'currency', currency: 'BRL' }
								).format(props.price);
	
	return (
		<Fragment>
		<Control key={props.list.length} className="field has-addons">
			<div className="control">	
				<button className="age button is-link has-text-weight-bold">{props.age}</button>
			</div>
			<div className="control is-expanded is-fullwidth">
				<div className="input is-fullwidth is-link">
					<p>{price}</p>
				</div>
			</div>
			<div className="control">
				<button className="close button is-danger has-text-weight-bold" onClick={props.handleRemovePerson} >
					<RemoveIcon src={remove} />
				</button>
			</div>
		</Control>
		</Fragment>
	);
			
}