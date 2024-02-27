export type Action =
	| { type: 'set-foreground-color', color: string }
	| { type: 'set-background-color', color: string }
	| { type: 'set-theme-color', index: number, color: string }
	| { type: 'set-theme-color-count', count: number };

export type State = {
	foregroundColor: string;
	backgroundColor: string;
	themeColorCount: number;
	themeColors: string[];
}

export function reducer(state: State, action: Action): State {
	switch (action.type) {
		case 'set-foreground-color':
			return {
				...state,
				foregroundColor: action.color,
			};
		case 'set-background-color':
			return {
				...state,
				backgroundColor: action.color,
			};
		case 'set-theme-color':
			return {
				...state,
				themeColors: state.themeColors.map((color, index) => {
					if (index == action.index) {
						return action.color;
					} else {
						return color;
					}
				}),
			};
		case 'set-theme-color-count':
			return {
				...state,
				themeColorCount: action.count,
			};
		default:
			return state;
	}
};