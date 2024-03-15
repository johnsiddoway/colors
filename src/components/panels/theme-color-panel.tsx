import { ThemeColor } from "../../types";
import { SelectPicker, ThemeColorPicker } from "../pickers";
import { PanelProps } from "./panel-props";

export function ThemeColorPanel({ themeColorCount, themeColors, dispatch }: PanelProps) {
	const themeColorCountOptions = [...Array(12)].map((e, i) => { return { value: i+1, label: i+1 }});
	const themeColorPickers = themeColors.map((themeColor, index) => <ThemeColorPicker key={index}
		index={index}
		backgroundColor={themeColor.backgroundColor}
		invertForegroundColor={themeColor.invertForegroundColor}
		onChange={(value: ThemeColor) => dispatch({ type: 'set-theme-color', index, value })}
		label={`Theme Color ${index + 1}`} />
	);
	return <>
		<h2>Theme Colors</h2>
		<SelectPicker name="theme-color-count" value={themeColorCount} options={themeColorCountOptions} onChange={(value: any) => dispatch({ type: 'set-theme-color-count', value: parseInt(value) })} label="Theme Colors" />
		{themeColorPickers}
	</>;
}