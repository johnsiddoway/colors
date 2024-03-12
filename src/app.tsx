import { useReducer } from 'react';
import { PickerPanel } from "./components/picker-panel/picker-panel";
import { ThemeColorPanel } from './components/theme-color-panel/theme-color-panel';
import { InteractivePanel } from './components/button-panels/interactive-panel';
import { NormalPanel } from './components/button-panels/normal-panel';
import { HoverPanel } from './components/button-panels/hover-panel';
import { ActivePanel } from './components/button-panels/active-panel';
import { initialState, reducer } from "./types/state";
import './styles/app.scss';

export function App() {
	const [state, dispatch] = useReducer(reducer, initialState);
	document.body.style.backgroundColor = state.backgroundColor;

	const props = {
		...state,
		dispatch
	};

	return <>
		<div className="pickerPanel">
			<PickerPanel {...props} />
		</div>
		<div className="themeColorPanel">
			<ThemeColorPanel {...props} />
		</div>
		<div className="examplesPanel">
			<h2>Examples</h2>
			<div className="examples">
				<InteractivePanel {...props} />
				<NormalPanel {...props} />
				<HoverPanel {...props} />
				<ActivePanel {...props} />
			</div>
		</div>
	</>;
}