import { Action, State } from "../../types/state";
import { RangePicker } from "../pickers/range-picker";
import { ButtonExamples } from "./button-examples";

function ButtonStyles(props: StateWithDispatch) {
	return <div className="pickerPanel column-with-gap">
		<RangePicker id="hover" onChange={(value) => props.dispatch({ type: 'set-hover-shift', value: value })} value={props.hoverShift} label="Hover Color Shift" />
		<RangePicker id="active" onChange={(value) => props.dispatch({ type: 'set-active-shift', value: value })} value={props.activeShift} label="Active Color Shift" />
		<RangePicker id="border" onChange={(value) => props.dispatch({ type: 'set-border-shift', value: value })} value={props.borderShift} label="Border Color Shift" />
	</div>;
}

export interface StateWithDispatch extends State {
	dispatch: React.Dispatch<Action>;
}
export function ButtonPanel(props: StateWithDispatch) {
	return <div>
		<h2>Buttons</h2>
		<div className="buttonPanel">
			<ButtonStyles {...props} />
			<ButtonExamples {...props} />
		</div>
	</div>;
};
