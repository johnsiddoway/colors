import { useReducer } from 'react';
import { ButtonPanel } from './components/button-panel/button-panel';
import { PickerPanel } from "./components/picker-panel/picker-panel";
import { ThemeColorPanel } from './components/theme-color-panel/theme-color-panel';
import { initialState, reducer } from "./types/state";
import './styles/app.scss';

export function App() {
	const [state, dispatch] = useReducer(reducer, initialState);
	document.body.style.backgroundColor = state.backgroundColor;

	return <>
		<div className="pickerPanel">
			<PickerPanel {...state} dispatch={dispatch} />
		</div>
		<div className="themeColorPanel">
			<ThemeColorPanel {...state} dispath={dispatch} />
		</div>
		<div className="examplesPanel">
			<ButtonPanel {...state} dispatch={dispatch} />
		</div>
	</>;
}