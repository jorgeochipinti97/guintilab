import React, { useEffect, useState } from 'react'
import useLanguage from '../../hook/UseLanguage'
export const ButtonGroup = () => {
	const changeLanguage = (value) => {
		localStorage.setItem("idiomaPreferido", value)
	}
	const getLanguage = () => {
		const language = localStorage.getItem('idiomaPreferido')
		alert(language)

	}
	// const { language, changeLanguage } = useLanguage();

	// const handleLanguageChange = (newLanguage) => {
	// 	changeLanguage(newLanguage);
	// };

	return (
		<div className="flex justify-around w-3/5" >
			{/* <div className='flex items-center justify-center'>
				<button className='px-2 py-1 rounded-lg' style={{backgroundColor: language == 'es' ? 'var(--theme-primary)' :'', color: language == 'es' ?  'var(--theme-bg)' :'var(--theme-on-bg)'}}  onClick={() =>  changeLanguage('es')}>ES</button>
				<button className='px-2 py-1 rounded-lg' onClick={() => changeLanguage('es')}>ES</button>
				<span className='mx-2'>|</span>
				<button className='px-2 py-1 rounded-lg' onClick={() => changeLanguage('en')}>EN</button>
				<button className='px-2 py-1 rounded-lg' style={{backgroundColor: language == 'en' ? 'var(--theme-primary)' :'', color:  language == 'en' ?  'var(--theme-bg)' :'var(--theme-on-bg)'}}  onClick={() =>  changeLanguage('en')}>EN</button>
			</div> */}
		</div>

	)
}

