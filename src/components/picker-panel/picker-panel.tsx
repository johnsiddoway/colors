import { Action, State } from "../../types/state";
import { ColorPicker } from "./color-picker";
import { CountPicker } from "./count-picker";

export interface Props extends State {
	dispatch: React.Dispatch<Action>
}
export function PickerPanel({ foregroundColor, backgroundColor, themeColorCount, themeColors, dispatch }: Props) {
	const themeColorPickers = [];
	for (let index = 0; index < themeColorCount; index++) {
		themeColorPickers.push(<ColorPicker key={index}
			color={themeColors[index]}
			onChange={(color: string) => dispatch({ type: 'set-theme-color', index, color })}
			label={`Theme Color ${index + 1}`} />
		);
	}

	return <div className="pickerPanel">
		<ColorPicker color={foregroundColor} onChange={(color: string) => dispatch({ type: 'set-foreground-color', color })} label="Text" />
		<ColorPicker color={backgroundColor} onChange={(color: string) => dispatch({ type: 'set-background-color', color })} label="Background" />
		<CountPicker count={themeColorCount} onChange={(count: number) => dispatch({ type: 'set-theme-color-count', count })} label="Theme Colors" />
		{themeColorPickers}
	</div>;
}
