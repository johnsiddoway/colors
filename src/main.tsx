import React from 'react'
import ReactDOM from 'react-dom/client'
import { App } from './app.tsx';

ReactDOM.createRoot(document.body).render(
	<React.StrictMode>
		<header>Test</header>
		<main>
			<App />
		</main>
		<footer>Copyright Me</footer>
	</React.StrictMode>,
)
