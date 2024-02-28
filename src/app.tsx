import { useReducer } from 'react';
import { SwatchPanel } from './components/swatch-panel/swatch-panel';
import { PickerPanel } from "./components/picker-panel/picker-panel";
import { initialState, reducer } from "./types/state";
import './styles/app.scss';

export function App() {
	const [state, dispatch] = useReducer(reducer, initialState);

	document.body.style.backgroundColor = state.backgroundColor;

	return <>
		<PickerPanel {...state} dispatch={dispatch} />
		<SwatchPanel {...state} dispatch={dispatch} />
	</>;
}