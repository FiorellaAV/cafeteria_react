import React, { Suspense } from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './assets/css/style.css'
import { BrowserRouter } from 'react-router-dom'

ReactDOM.createRoot(document.getElementById('root')).render(

	<Suspense fallback={<div>Loading... </div>}>
		<BrowserRouter>
			<App />
		</BrowserRouter>
	</Suspense>
)
