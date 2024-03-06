import { CSSProperties } from "react";
import { Action, State } from "../../types/state";
import Color from "color";
import { RangePicker } from "../pickers/range-picker";

interface ButtonSwatchProps {
	backgroundColor: string;
	foregroundColor: string;
	contrastRatio: number;
	buttonText: string;
}

function Button({ backgroundColor, foregroundColor, buttonText, contrastRatio }: ButtonSwatchProps) {
	const buttonStyle: CSSProperties = {
		boxSizing: 'border-box',
		width: '6rem',
		display: 'block',
		border: '1px solid currentColor',
		padding: '0.375rem 0.75rem',
		backgroundColor: backgroundColor,
		color: foregroundColor,
	}
	const rowStyle: CSSProperties = {
		width: '10rem',
		display: 'flex',
		flexDirection: 'row',
		columnGap: '0.5rem'
	};
	return <div style={rowStyle}>
		<button type="button" style={buttonStyle}>{buttonText}</button >
		<ContrastChecker backgroundColor={backgroundColor} foregroundColor={foregroundColor} contrastRatio={contrastRatio} />
	</div>;
};

function ButtonExamples(props: State) {
	const baseButtons = props.themeColors.map((value, index) => {
		return <Button key={index} backgroundColor={value} foregroundColor={props.foregroundColor} contrastRatio={props.contrastRatio} buttonText={value} />
	});
	const hoverButtons = props.themeColors.map((value, index) => {
		const mixWith = props.hoverShift > 0 ? Color('#fff') : Color('#000');
		const weight = Math.abs(props.hoverShift) / 100;
		const backgroundColor = Color(value).mix(mixWith, weight).hex().toLocaleLowerCase();
		return <Button key={index} backgroundColor={backgroundColor} foregroundColor={props.foregroundColor} contrastRatio={props.contrastRatio} buttonText={backgroundColor} />
	});
	const activeButtons = props.themeColors.map((value, index) => {
		const mixWith = props.activeShift > 0 ? Color('#fff') : Color('#000');
		const weight = Math.abs(props.activeShift) / 100;
		const backgroundColor = Color(value).mix(mixWith, weight).hex().toLocaleLowerCase();
		return <Button key={index} backgroundColor={backgroundColor} foregroundColor={props.foregroundColor} contrastRatio={props.contrastRatio} buttonText={backgroundColor} />
	});
	return <div>
		<h3>Examples</h3>
		<div className="row-with-gap">
			<div className="column-with-gap">
				<h4>Normal</h4>
				{baseButtons}
			</div>
			<div className="column-with-gap">
				<h4>Hover</h4>
				{hoverButtons}
			</div>
			<div className="column-with-gap">
				<h4>Active</h4>
				{activeButtons}
			</div>
		</div>
	</div>;
}

function ButtonStyles(props: StateWithDispatch) {
	return <div className="pickerPanel column-with-gap">
		<RangePicker id="hover" onChange={(value) => props.dispatch({ type: 'set-hover-shift', value: value })} value={props.hoverShift} label="Hover Color Shift" />
		<RangePicker id="active" onChange={(value) => props.dispatch({ type: 'set-active-shift', value: value })} value={props.activeShift} label="Active Color Shift" />
	</div>;
}

function ContrastChecker({ backgroundColor, foregroundColor, contrastRatio }: { backgroundColor: string, foregroundColor: string, contrastRatio: number }) {
	const ratio = +(Color(backgroundColor).contrast(Color(foregroundColor)).toFixed(2));
	const style: CSSProperties = {
		display: 'flex',
		justifyContent: 'center',
		alignItems: 'center',
		width: "3.5rem",
		height: '100%',
		padding: 'auto',
		backgroundColor: (ratio >= contrastRatio ? '#d1e7dd' : '#f8d7da'),
	}
	return <div style={style}><div style={{ textAlign: 'center' }}>{ratio}</div></div>;
}

export interface StateWithDispatch extends State {
	dispatch: React.Dispatch<Action>;
}
export function ButtonPanel(props: StateWithDispatch) {
	return <div>
		<h2>Buttons</h2>
		<div className="buttonPanel">
			<ButtonStyles {...props} />
			{/* <div><ContrastCheckers {...props} /></div> */}
			<ButtonExamples {...props} />
		</div>
	</div>;
};
