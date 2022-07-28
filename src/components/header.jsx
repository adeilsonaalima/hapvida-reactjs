import React, { Fragment } from 'react';
import styled from 'styled-components';
import logotipo from '../assets/images/logotipo-hapvida.png';


const HeaderStyled = styled.header`
	max-width: 25rem;
	margin-left: auto;
	margin-right: auto;
	padding-top: 1rem;
	padding-bottom: 1rem;
	`

export default function Header() {
	return (
		<Fragment>
				<HeaderStyled>
					<img src={logotipo} alt="Logotipo Hapvida Saúde" />
				</HeaderStyled>
		</Fragment>
	);
}