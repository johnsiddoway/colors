export type Action =
	| { type: 'set-foreground-color', value: string }
	| { type: 'set-background-color', value: string }
	| { type: 'set-contrast-ratio', value: number }
	| { type: 'set-theme-color-count', value: number }
	| { type: 'set-theme-color', index: number, value: string }
	| { type: 'set-hover-shift', value: number };

export type State = {
	foregroundColor: string;
	backgroundColor: string;
	contrastRatio: number;
	themeColorCount: number;
	themeColors: string[];
	hoverShift: number;
}

export const initialState: State = {
	foregroundColor: "#292521",
	backgroundColor: "#fff",
	contrastRatio: 7,
	themeColorCount: 3,
	themeColors: ["#daa520", "#d1e7dd", "#0d6efd"],
	hoverShift: 15,
};

export function reducer(state: State, action: Action): State {
	switch (action.type) {
		case 'set-foreground-color':
			return {
				...state,
				foregroundColor: action.value,
			};
		case 'set-background-color':
			return {
				...state,
				backgroundColor: action.value,
			};
		case 'set-contrast-ratio':
			return {
				...state,
				contrastRatio: action.value,
			}
		case 'set-theme-color-count':
			const x = [];
			for (let index = 0; index < action.value; index++) {
				if (state.themeColors[index]) {
					x.push(state.themeColors[index]);
				} else {
					x.push("#fff");
				}
			}
			return {
				...state,
				themeColorCount: action.value,
				themeColors: x,
			};
		case 'set-theme-color':
			const themeColors = [];
			for (let index = 0; index < state.themeColorCount; index++) {
				themeColors[index] = (index === action.index ? action.value : state.themeColors[index]);
			}
			return {
				...state,
				themeColors,
			};
		case 'set-hover-shift':
			return {
				...state,
				hoverShift: action.value,
			};
		default:
			return state;
	}
};