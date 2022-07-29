// DEPENDENCIES
import React, { useState, useEffect, useRef } from 'react';
import { ToastContainer, toast, Flip } from 'react-toastify';
import styled from 'styled-components';

// COMPONENTS
import Form from './form'
import Cover from './cover'
import Person from './person'
import Total from './total'

export default function Main() {
	
	const [table, setTable] = useState([]);
	const [cover, setCover] = useState([]);
	const [covering, setCovering] = useState([]);
	const [list, setList] = useState([]);
	const [total, setTotal] = useState([]);
	const [disabled, setDisabled] = useState(false);
	const [legalDisabled, setLegalDisabled] = useState(false);
	
	useEffect(() => {
		fetch('../../api/table.json')
		.then(res => res.json())
		.then(data => {
			setTable(data)
		})
	}, []);

	useEffect(() => {
		fetch('../../api/cover.json')
		.then(res => res.json())
		.then(data => {
			setCover(data)
		})
	}, []);

	useEffect(() => {
		const total = list.map(person => person.price).reduce((acc, cur) => acc + cur, 0)
		setTotal(total)
	}, [list])

	useEffect(() => {
		if(list.length) {
			setDisabled(true)
		} else {
			setDisabled(false)
		}
	})

	const formSubmit= form => {
		const error1 = 'Não é possível realizar venda empresarial com odontologia!'
		const error2 = 'Não há tabela empresarial cadastrada para'
		const category = form.category.value,
					state = form.state.value,
					plan = form.plan.value,
					age = form.age.value,
					dentistry = form.dentistry ? "withDentistry" : "withoutDentistry",
					cop = form.cop ? "withCoP" : "withoutCoP",
					enterprise = form.enterprise;

		if(category == "legal-person" && dentistry == "withDentistry") {
			toast.error(error1, {
  	    position: toast.POSITION.BOTTOM_RIGHT,
				autoClose: 2500,
				hideProgressBar: true,
				draggablePercent: 60
  	  	});
				toast.clearWaitingQueue();
			} else if(category == "legal-person" && state == "ceara" || category == "legal-person" && state == "goiania") {
			toast.error(`${error2} ${form.state.label}!`, {
  	    position: toast.POSITION.BOTTOM_RIGHT,
				autoClose: 2500,
				hideProgressBar: true,
				draggablePercent: 60
  	  	});
				toast.clearWaitingQueue();
			} else { 
				const price = table[category][state][plan][cop][dentistry][age];
				setCovering(cover[category][state][plan][dentistry]);
				setList([...list, { 
								age: age,
								price: price }])
		}
	}



	const handleRemovePerson = (person) => {
		setList(list.filter(item => person !== item))
	}

	const handleCleaner = () => {
		setList([])
		setCovering([])
	}

	return (
	<main>
	<div className="columns">
		<div className="column">
			<div className="box">
				<Form formSubmit={formSubmit} disabled={disabled} handleCleaner={handleCleaner}/>
			</div>
		</div>
		<div className="column">
			<div className="box">
				<Cover cover={covering} />
				{list.map(person => (
				<Person list={list} age={person.age} price={person.price} handleRemovePerson={() => handleRemovePerson(person)}/>
				))}
				<Total total={total} handleCleaner={handleCleaner}/>
			</div>
		</div>
	</div>
	</main>
	);
}