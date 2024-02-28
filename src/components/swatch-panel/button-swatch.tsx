import { CSSProperties } from "react";
import { colord, extend } from "colord";
import a11yPlugin from "colord/plugins/a11y";
import { State } from "../../types/state";

extend([a11yPlugin]);

export interface Props extends State {

};

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

function ContrastChecker(props: ButtonSwatchProps) {
	const ratio = colord(props.backgroundColor).contrast(props.color);
	const style: CSSProperties = {
		display: "inline-block",
		minWidth: "3.5rem",
		padding: '0.375rem 0.75rem',
		textAlign: "center",
		backgroundColor: (ratio >= props.contrastRatio ? '#d1e7dd' : '#f8d7da'),
	}
	return <div>
		Contrast Ratio: <div style={style}>{ratio}</div>
	</div>;
}

interface ButtonSwatchProps {
	backgroundColor: string;
	color: string;
	contrastRatio: number;
	buttonText: string;
}
function ButtonSwatch(props: ButtonSwatchProps) {
	const style: CSSProperties = {
		display: 'flex',
		alignItems: 'baseline',
		gap: '0.5rem',
		marginBottom: '1rem',
	};
	return <div style={style}>
		<Button {...props} />
		<ContrastChecker {...props} />
	</div>
}

export function ButtonSwatchList(props: Props) {
	const baseButtons = props.themeColors.map((value, index) => {
		return <ButtonSwatch key={index} backgroundColor={value} color={props.foregroundColor} contrastRatio={props.contrastRatio} buttonText={`Theme Color ${index + 1}`} />
	});
	return <div>
		<h2>Buttons</h2>
		<div className="flex-with-gap">
			<h3>Base Buttons</h3>
			{baseButtons}
		</div>
		<div className="flex-with-gap">
			<h3>Active Buttons</h3>
		</div>

	</div>;
};
