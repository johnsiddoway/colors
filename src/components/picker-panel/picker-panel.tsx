import { Action, State } from "../../types/state";
import { ColorPicker } from "./color-picker";
import { ContrastPicker } from "./contrast-picker";
import { CountPicker } from "./count-picker";

export interface Props extends State {
	dispatch: React.Dispatch<Action>
}
export function PickerPanel({ foregroundColor, backgroundColor, contrastRatio, themeColorCount, themeColors, dispatch }: Props) {
	const themeColorPickers = [];
	for (let index = 0; index < themeColorCount; index++) {
		themeColorPickers.push(<ColorPicker key={index}
			color={themeColors[index]}
			onChange={(value: string) => dispatch({ type: 'set-theme-color', index, value })}
			label={`Theme Color ${index + 1}`} />
		);
	}

	return <div className="pickerPanel column-with-gap">
		<h2>Base Colors</h2>
		<ColorPicker color={foregroundColor} onChange={(value: string) => dispatch({ type: 'set-foreground-color', value })} label="Text" />
		<ColorPicker color={backgroundColor} onChange={(value: string) => dispatch({ type: 'set-background-color', value })} label="Background" />
		<ContrastPicker value={contrastRatio} onChange={(value: number) => dispatch({ type: "set-contrast-ratio", value: value })} label="Contrast Ratio" />
		<CountPicker value={themeColorCount} onChange={(value: number) => dispatch({ type: 'set-theme-color-count', value })} label="Theme Colors" />
		{themeColorPickers}
	</div>;
}
