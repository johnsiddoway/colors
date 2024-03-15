import { ColorPicker, RangePicker, SelectPicker } from "../pickers";
import { PanelProps } from "./panel-props";

export function StylePanel(props: PanelProps) {
	const contrastOptions: any[] = [
		{ value: 3, label: "3:1 (AA large text)" },
		{ value: 4.5, label: "4.5:1 (AAA large text)" },
		{ value: 7, label: "7:1 (AAA normal text)" }
	];
	return <>
		<h2>Base Colors</h2>
		<ColorPicker backgroundColor={props.foregroundColor} onChange={(value: string) => props.dispatch({ type: 'set-foreground-color', value })} label="Text" />
		<ColorPicker backgroundColor={props.backgroundColor} onChange={(value: string) => props.dispatch({ type: 'set-background-color', value })} label="Background" />
		<SelectPicker name="contract-ratio" value={props.contrastRatio} label="Contract Ratio" options={contrastOptions} onChange={(value: any) => props.dispatch({ type: "set-contrast-ratio", value: parseInt(value) })} />
		<RangePicker id="hover" onChange={(value) => props.dispatch({ type: 'set-hover-shift', value: value })} value={props.hoverShift} label="Hover Color Shift" />
		<RangePicker id="active" onChange={(value) => props.dispatch({ type: 'set-active-shift', value: value })} value={props.activeShift} label="Active Color Shift" />
		<RangePicker id="border" onChange={(value) => props.dispatch({ type: 'set-border-shift', value: value })} value={props.borderShift} label="Border Color Shift" />
	</>;
}
