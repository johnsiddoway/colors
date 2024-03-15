import { useReducer } from 'react';
import { ActivePanel, HoverPanel, InteractivePanel, NormalPanel, StylePanel, ThemeColorPanel } from "./components";
import { initialState, reducer } from "./types";
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
			<StylePanel {...props} />
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