import { Action, State } from "../../types/state";
import { ColorPicker } from "../pickers/color-picker";
import { SelectPicker } from "../pickers/select-picker";

export interface Props extends State {
	dispatch: React.Dispatch<Action>
}
export function PickerPanel({ foregroundColor, backgroundColor, contrastRatio, dispatch }: Props) {
	const contrastOptions: any[] = [
		{ value: 3, label: "3:1 (AA large text)" },
		{ value: 4.5, label: "4.5:1 (AAA large text)" },
		{ value: 7, label: "7:1 (AAA normal text)" }
	];
	return <>
		<h2>Base Colors</h2>
		<ColorPicker color={foregroundColor} onChange={(value: string) => dispatch({ type: 'set-foreground-color', value })} label="Text" />
		<ColorPicker color={backgroundColor} onChange={(value: string) => dispatch({ type: 'set-background-color', value })} label="Background" />
		<SelectPicker name="contract-ratio" value={contrastRatio} label="Contract Ratio" options={contrastOptions} onChange={(value: any) => dispatch({ type: "set-contrast-ratio", value: parseInt(value) })} />
	</>;
}
