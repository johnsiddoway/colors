import Color from "color";

export type ThemeColor = {
	backgroundColor: string;
	invertForegroundColor: boolean;
};
export type State = {
	foregroundColor: string;
	backgroundColor: string;
	contrastRatio: number;
	themeColorCount: number;
	themeColors: ThemeColor[];
	borderShift: number;
	hoverShift: number;
	activeShift: number;
}

export const initialState: State = {
	foregroundColor: "#211905",
	backgroundColor: "#fff",
	contrastRatio: 7,
	themeColorCount: 3,
	themeColors: [
		{ backgroundColor: "#daa520", invertForegroundColor: false },
		{ backgroundColor: "#d1e7dd", invertForegroundColor: false },
		{ backgroundColor: "#0d6efd", invertForegroundColor: false }],
	borderShift: -20,
	hoverShift: -15,
	activeShift: -20,
};

export type Action =
	| { type: 'set-foreground-color', value: string }
	| { type: 'set-background-color', value: string }
	| { type: 'set-contrast-ratio', value: number }
	| { type: 'set-theme-color-count', value: number }
	| { type: 'set-theme-color', index: number, value: ThemeColor }
	| { type: 'set-border-shift', value: number }
	| { type: 'set-hover-shift', value: number }
	| { type: 'set-active-shift', value: number };

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
			const x: ThemeColor[] = [];
			const rotation = 360 / action.value;
			let lastColor = '#cacaca';
			for (let index = 0; index < action.value; index++) {
				lastColor = state.themeColors[index]?.backgroundColor
					?? Color(lastColor).rotate(rotation).hex().toLocaleLowerCase();
				x.push({ backgroundColor: lastColor, invertForegroundColor: false });
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
		case 'set-border-shift':
			return {
				...state,
				borderShift: action.value,
			};
		case 'set-hover-shift':
			return {
				...state,
				hoverShift: action.value,
			};
		case 'set-active-shift':
			return {
				...state,
				activeShift: action.value,
			}
		default:
			return state;
	}
};