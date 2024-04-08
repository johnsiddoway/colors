import Color from "color";
import styles from "./base.module.scss";

export interface ButtonExampleProps {
	borderColor: string;
	foregroundColor: string;
	backgroundColor: string;
	hoverColor: string;
	activeColor: string;
	contrastRatio: number;
	buttonText: string;
}

function ContrastChecker({ borderColor, backgroundColor, foregroundColor, contrastRatio }: ButtonExampleProps) {
	const ratio = +(Color(backgroundColor).contrast(Color(foregroundColor)).toFixed(2));
	const style: React.CSSProperties = {
		"--background-color": (ratio >= contrastRatio ? '#d1e7dd' : '#f8d7da'),
		"--border-color": borderColor,
	}
	return <div className={styles.contractChecker} style={style}>{ratio}</div>;
};

export function ButtonExample(props: ButtonExampleProps) {
	const style: React.CSSProperties = {
		"--background-color": props.backgroundColor,
		"--background-color-hover": props.hoverColor,
		"--background-color-active": props.activeColor,
		"--color": props.foregroundColor,
		"--border-color": props.borderColor,
	};
	return <div className={styles.row}>
		<button type="button" className={styles.button} style={style}>{props.buttonText}</button>
		<ContrastChecker {...props} />
	</div>;
};