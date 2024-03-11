import { Action, State, ThemeColor } from "../../types/state";
import { ColorPicker } from "../pickers/color-picker";
import { ContrastPicker } from "../pickers/contrast-picker";
import { CountPicker } from "../pickers/count-picker";
import { ThemeColorPicker } from "../pickers/theme-color-picker";

export interface Props extends State {
	dispatch: React.Dispatch<Action>
}
export function PickerPanel({ foregroundColor, backgroundColor, contrastRatio, themeColorCount, themeColors, dispatch }: Props) {
	const themeColorPickers = [];
	for (let index = 0; index < themeColorCount; index++) {
		themeColorPickers.push(<ThemeColorPicker key={index}
			index={index}
			backgroundColor={themeColors[index].backgroundColor}
			invertForegroundColor={themeColors[index].invertForegroundColor}
			onChange={(value: ThemeColor) => dispatch({ type: 'set-theme-color', index, value })}
			label={`Theme Color ${index + 1}`} />
		);
	}

	return <div className="pickerPanel">
		<h2>Base Colors</h2>
		<ColorPicker color={foregroundColor} onChange={(value: string) => dispatch({ type: 'set-foreground-color', value })} label="Text" />
		<ColorPicker color={backgroundColor} onChange={(value: string) => dispatch({ type: 'set-background-color', value })} label="Background" />
		<ContrastPicker value={contrastRatio} onChange={(value: number) => dispatch({ type: "set-contrast-ratio", value: value })} label="Contrast Ratio" />
		<CountPicker value={themeColorCount} onChange={(value: number) => dispatch({ type: 'set-theme-color-count', value })} label="Theme Colors" />
		{themeColorPickers}
	</div>;
}
