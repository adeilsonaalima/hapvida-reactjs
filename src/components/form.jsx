// DEPENDENCIES
import React, { Fragment, useEffect } from 'react';
import ReactSelect from 'react-select';
import styled from 'styled-components';
import { useForm, Controller } from 'react-hook-form';
import { ToastContainer, toast, Flip } from 'react-toastify';

// ASSETS
import add from '../assets/icons/add.svg';
import refresh from '../assets/icons/refresh.svg';

// CSS
import '../styles/checkbox.css';
import 'react-toastify/dist/ReactToastify.css';

// REACT-SELECT STYLES
const mainColor = '#485fc7'
const customStyles = {

	control: (provided, state) => ({
		...provided,
		'&:hover': {
			borderColor: mainColor,
		},
		borderColor: mainColor,
		boxShadow: state.isFocused ? `0 0 0 0` : ''
	}),

	clearIndicator: (provided, state) => ({
		...provided,
		color: mainColor,
		'&:hover': {
			color: '#ff385f'
		}
	}),

	dropdownIndicator: (provided, state) => ({
		...provided,
			'&:hover': {
				backgroundColor: '#FFF',
				color: mainColor
			},
		backgroundColor: mainColor,
		color: '#FFF'
	}),

	option: (provided, state) => ({
		...provided,
		backgroundColor: state.isSelected ? mainColor : '',
	}),

	input: (provided, state) => ({
		...provided,
    color: 'transparent'
	}),

	valueContainer: (provided, state) => ({
	...provided,
	opacity: state.isDisabled ? 0.9 : "",
	backgroundColor: state.isDisabled ? "white" : ""
})
}

// STYLED COMPONENTS
const Icon = styled.img`
	filter: brightness(0)
					saturate(100%)
					invert(99%)
					sepia(100%)
					saturate(2%)
					hue-rotate(101deg)
					brightness(102%)
					contrast(100%)
`

export default function Form(props) {

	const defaultValues = {
			category: '',
      state: '',
      plan: '',
			age: '',
			dentistry: false,
			cop: false,
			enterprise: false
    }

	const { register, control, handleSubmit, reset } = useForm({defaultValues});

	const onSubmit = data => {
		
		if(!!data.category && !!data.state && !!data.plan && !!data.age) {
			props.formSubmit(data);
		} else {
			toast.error('Preencha todos os campos!', {
  	      position: toast.POSITION.BOTTOM_RIGHT,
					autoClose: 2500,
					hideProgressBar: true,
					draggablePercent: 60
  	    });
			toast.clearWaitingQueue();
		}
	}
	
	return (
	<Fragment>

		<ToastContainer limit={2}
										transition={Flip}
										pauseOnFocusLoss={false} />

		<form onSubmit={handleSubmit(onSubmit)}>

		<div className="mb-1">
		  <Controller
	      name="category"
	      control={control}
	      render={({ field }) =>
					<ReactSelect
						{...field}
						isClearable={true}
	  				styles={customStyles}
						placeholder="Categoria"
						isSearchable={false}
	  				blurInputOnSelect={true}
						isDisabled={props.disabled}		
						options={[
 							{ value: "physical-person", label: "Pessoa Física (CPF)" },
 							{ value: "legal-person", label: "Pessoa Jurídica (CNPJ)" }
						]}			
					/> }
			/>
		</div>
			
		<div className="mb-1">
		  <Controller
	      name="state"
	      control={control}
	      render={({ field }) =>
					<ReactSelect
						{...field}
						isClearable={true}
	  				styles={customStyles}
						placeholder="Estado"
						isSearchable={false}
	  				blurInputOnSelect={true}
						isDisabled={props.disabled}		
						options={[
 							{ value: "bahia", label: "Bahia" },
 							{ value: "ceara", label: "Ceará" },
				  		{ value: "goiania", label: "Goiania" }
						]}
					/> }
			/>
		</div>
			
		<div className="mb-1">
		  <Controller
	      name="plan"
	      control={control}
	      render={({ field }) =>
					<ReactSelect
						{...field}
						isClearable={true}
	  				styles={customStyles}
						placeholder="Plano"
						isSearchable={false}
						blurInputOnSelect={true}
						isDisabled={props.disabled}		
						options={[
  						{ value: "outpatient", label: "Ambulatorial s/ acomodação" },
  						{ value: "nursery", label: "Hospitalar c/ Enfermaria" },
  						{ value: "apartment", label: "Hospitalar c/ Apartamento" }
						]}
					/> }
			/>
		</div>
			
		<div className="mb-1">
		  <Controller
	      name="age"
	      control={control}
	      render={({ field }) =>
					<ReactSelect
						{...field}
						isClearable={true}
	  				styles={customStyles}
						placeholder="Idade"
						isSearchable={false}
	  				blurInputOnSelect={false}
						options={[
  						{ value: "0 a 18", label: "0 a 18" },
  						{ value: "19 a 23", label: "19 a 23" },
  						{ value: "24 a 28", label: "24 a 28" },
  						{ value: "29 a 33", label: "29 a 33" },
  						{ value: "34 a 38", label: "34 a 38" },
  						{ value: "39 a 43", label: "39 a 43" },
  						{ value: "44 a 48", label: "44 a 48" },
  						{ value: "49 a 53", label: "49 a 53" },
  						{ value: "54 a 58", label: "54 a 58" },
  						{ value: "59+", label: "59+" }
						]}
					/> }
			/>
		</div>
			
			<div className="mt-3">
			 	<label className="b-contain">
					<span>Odontologia</span>
					<input type="checkbox" id="dentistry" disabled={props.disabled} {...register("dentistry")} />
					<div className="b-input"></div>
				</label>
			</div>
	
			<div>
			 	<label className="b-contain">
					<span>Coparticipação</span>
					<input type="checkbox" id="cop" disabled={props.disabled} {...register("cop")} />
					<div className="b-input"></div>
				</label>
			</div>
			
		<hr />

		<div className="has-text-centered">
			<button type="submit" className="button is-link mx-1">
				<Icon src={add} />
			</button>

			<button onClick={() => {
				reset();
				props.handleCleaner();
			}} type="reset" className="button is-danger">
				<Icon src={refresh} />
			</button>
		</div>

		</form>
			
	</Fragment>
	);
}