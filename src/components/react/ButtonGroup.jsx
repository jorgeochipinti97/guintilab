import React, { useEffect, useState } from 'react'

export const ButtonGroup = () => {

const changeLanguage = (value)=>{
localStorage.setItem("language", value)
}

  return (
<div class="flex justify-around w-3/5" >
			<div class=" flex">
				<div class="m-1 flex items-center cursor-pointer" onClick={()=>changeLanguage('ar')}>
					<span>AR</span>
				</div>
				<div class="flex items-center cursor-pointer">

					<span>/</span>
				</div>
				<div class="m-1 flex items-center cursor-pointer" onClick={()=>changeLanguage('es')}>
					<span>ES</span>
				</div>
				<div class="flex items-center">

					<span>/</span>
				</div>
				<div class="m-1 flex items-center cursor-pointer" onClick={()=>changeLanguage('us')}>
					<span>US</span>
				</div>

	
		

	
			</div>

		</div>

  )
}

