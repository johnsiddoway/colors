import Color from "color";
import { State } from "../../types/state";
import { CSSProperties } from "react";

interface ButtonExampleProps {
	backgroundColor: string;
	foregroundColor: string;
	borderColor: string;
	contrastRatio: number;
	buttonText: string;
    log: boolean;
}

function ButtonExample({ backgroundColor, foregroundColor, borderColor, buttonText, contrastRatio, log }: ButtonExampleProps) {
	const buttonStyle: CSSProperties = {
		boxSizing: 'border-box',
		width: '6rem',
		display: 'block',
		border: `1px solid ${borderColor}`,
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
		<ContrastChecker backgroundColor={backgroundColor} foregroundColor={foregroundColor} contrastRatio={contrastRatio} log={log} />
	</div>;
};

function ContrastChecker({ backgroundColor, foregroundColor, contrastRatio, log }: { backgroundColor: string, foregroundColor: string, contrastRatio: number, log: boolean }) {
    if (log) {
        console.info(`Checking contrast between ${backgroundColor} and ${foregroundColor}`);
        console.info(JSON.stringify(Color(backgroundColor)));
        console.info(Color(backgroundColor).contrast(Color(foregroundColor)));
    }
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

const mix = (value: string, shift: number) => {
	const mixWith = shift > 0 ? Color('#fff') : Color('#000');
	const weight = Math.abs(shift / 100);
	return Color(value).mix(mixWith, weight).hex().toLocaleLowerCase();
};

export function ButtonExamples(props: State) {
	const baseButtons = props.themeColors.map((value, index) => {
		const borderColor = mix(value, props.borderShift);
		return <ButtonExample key={index} log={true} backgroundColor={value} foregroundColor={props.foregroundColor} borderColor={borderColor} contrastRatio={props.contrastRatio} buttonText={value} />
	});
	const hoverButtons = props.themeColors.map((value, index) => {
		const backgroundColor = mix(value, props.hoverShift);
		const borderColor = mix(value, props.borderShift);
		return <ButtonExample key={index} log={false} backgroundColor={backgroundColor} foregroundColor={props.foregroundColor} borderColor={borderColor} contrastRatio={props.contrastRatio} buttonText={backgroundColor} />
	});
	const activeButtons = props.themeColors.map((value, index) => {
		const backgroundColor = mix(value, props.activeShift);
		const borderColor = mix(value, props.borderShift);
		return <ButtonExample key={index} log={false} backgroundColor={backgroundColor} foregroundColor={props.foregroundColor} borderColor={borderColor} contrastRatio={props.contrastRatio} buttonText={backgroundColor} />
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