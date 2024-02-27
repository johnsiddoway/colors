import { useReducer } from 'react';
import { SwatchPanel } from './components/swatch-panel/swatch-panel';
import { PickerPanel } from "./components/picker-panel/picker-panel";
import { reducer } from "./types/state";
import './styles/app.scss';

export function App() {
	const [state, dispatch] = useReducer(reducer, { foregroundColor: '#292521', backgroundColor: '#fff', contrastRatio: 7, themeColorCount: 1, themeColors: ['#daa520'] });

	document.body.style.backgroundColor = state.backgroundColor;

	return <>
		<PickerPanel {...state} dispatch={dispatch} />
		<SwatchPanel {...state} />
	</>;
}