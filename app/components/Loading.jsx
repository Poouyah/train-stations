import React from 'react'
import './Loading.css'

function Loading() {
	return (
		<div className="w-full h-full flex justify-center items-center absolute">
			<div className="loader"></div>
		</div>
	)
}

export default Loading;