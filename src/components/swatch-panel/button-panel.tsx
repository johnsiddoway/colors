import { CSSProperties } from "react";
import { Action, State } from "../../types/state";
import Color from "color";
import { RangePicker } from "../pickers/range-picker";

interface ButtonSwatchProps {
	backgroundColor: string;
	color: string;
	contrastRatio: number;
	buttonText: string;
}

function Button({ backgroundColor, color, buttonText }: ButtonSwatchProps) {
	const style: CSSProperties = {
		boxSizing: 'border-box',
		display: 'block',
		border: '1px solid currentColor',
		padding: '0.375rem 0.75rem',
		backgroundColor: backgroundColor,
		color: color,
	}
	return <button type="button" style={style}>{buttonText}</button >;
};

// function ButtonSwatch(props: ButtonSwatchProps) {
// 	const style: CSSProperties = {
// 		display: 'flex',
// 		alignItems: 'baseline',
// 		gap: '0.5rem',
// 		marginBottom: '1rem',
// 	};
// 	return <div style={style}>
// 		<Button {...props} />
// 		<ContrastChecker {...props} />
// 	</div>
// }

function ButtonExamples(props: State) {
	const baseButtons = props.themeColors.map((value, index) => {
		return <Button key={index} backgroundColor={value} color={props.foregroundColor} contrastRatio={props.contrastRatio} buttonText={`Theme Color ${index + 1}`} />
	});
	const hoverButtons = props.themeColors.map((value, index) => {
		const mixWith = props.hoverShift > 0 ? Color('#fff') : Color('#000');
		const weight = Math.abs(props.hoverShift) / 100;
		const backgroundColor = Color(value).mix(mixWith, weight).hex();
		return <Button key={index} backgroundColor={backgroundColor} color={props.foregroundColor} contrastRatio={props.contrastRatio} buttonText={backgroundColor} />
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
				{baseButtons}
			</div>
		</div>
	</div>;
}

function ButtonStyles(props: StateWithDispatch) {
	return <>
		<RangePicker id="hover" onChange={(value) => props.dispatch({ type: 'set-hover-shift', value: value })} value={props.hoverShift} />
	</>;
}

function ContrastCheckers(props: State) {
	const contrastCheckers = props.themeColors.map((value, index) => {
		return <ContrastChecker key={index} backgroundColor={value} foregroundColor={props.foregroundColor} contrastRatio={props.contrastRatio} />;
	});
	return <div>
		<h3>Contrast</h3>
		<div className="column-with-gap">
			<div className="h4-spacer"></div>
			{contrastCheckers}
		</div>
	</div>;
}

function ContrastChecker({ backgroundColor, foregroundColor, contrastRatio }: { backgroundColor: string, foregroundColor: string, contrastRatio: number }) {
	const ratio = +(Color(backgroundColor).contrast(Color(foregroundColor)).toFixed(2));
	const style: CSSProperties = {
		display: "inline-block",
		minWidth: "3.5rem",
		padding: '0.375rem 0.75rem',
		textAlign: "center",
		backgroundColor: (ratio >= contrastRatio ? '#d1e7dd' : '#f8d7da'),
	}
	return <div>
		Contrast Ratio: <div style={style}>{ratio}</div>
	</div>;
}

export interface StateWithDispatch extends State {
	dispatch: React.Dispatch<Action>;
}
export function ButtonPanel(props: StateWithDispatch) {
	return <div>
		<h2>Buttons</h2>
		<div className="buttonPanel">
			<div><ButtonStyles {...props} /></div>
			<div><ContrastCheckers {...props} /></div>
			<div><ButtonExamples {...props} /></div>
		</div>
	</div>;
};
