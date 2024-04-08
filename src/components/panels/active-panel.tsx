import { PanelProps } from "./panel-props";
import styles from "./base.module.scss";
import Color from "color";
import { ButtonExample } from "./button-examples";

const mix = (value: string, shift: number) => {
	const mixWith = shift > 0 ? Color('#fff') : Color('#000');
	const weight = Math.abs(shift / 100);
	return Color(value).mix(mixWith, weight).hex().toLocaleLowerCase();
};

export function ActivePanel(props: PanelProps) {
	const buttons = props.themeColors.map((value, index) => {
		const backgroundColor = mix(value.backgroundColor, props.activeShift);
		return <div key={index}>
			<div className={styles.label}>Theme Color {index + 1}</div>
			<ButtonExample
				borderColor={props.foregroundColor}
				foregroundColor={value.invertForegroundColor ? props.backgroundColor : props.foregroundColor}
				backgroundColor={backgroundColor}
				hoverColor={backgroundColor}
				activeColor={backgroundColor}
				buttonText={value.backgroundColor}
				contrastRatio={props.contrastRatio} />
		</div>;
	});
	return <div>
		<h3 className={styles.heading}>Active Buttons</h3>
		{buttons}
	</div>;
}