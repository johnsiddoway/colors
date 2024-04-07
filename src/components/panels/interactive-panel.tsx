import { PanelProps } from "./panel-props";
import styles from "./base.module.scss";
import Color from "color";

const mix = (value: string, shift: number) => {
	const mixWith = shift > 0 ? Color('#fff') : Color('#000');
	const weight = Math.abs(shift / 100);
	return Color(value).mix(mixWith, weight).hex().toLocaleLowerCase();
};

export function InteractivePanel(props: PanelProps) {
    const buttons = props.themeColors.map((value, index) => {
        const style: React.CSSProperties = {
            "--background-color": value.backgroundColor,
            "--background-color-hover": mix(value.backgroundColor, props.hoverShift),
            "--background-color-active": mix(value.backgroundColor, props.activeShift),
            "--color": value.invertForegroundColor ? props.backgroundColor : props.foregroundColor,
            "--border-color": props.foregroundColor,
        };
        return <div key={index}>
            <div className={styles.label}>Theme Color {index + 1}</div>
            <button className={styles.button} style={style}>{value.backgroundColor}</button>
            </div>;
    })
    return <div>
        <h3 className={styles.heading}>Interactive Buttons</h3>
        {buttons}
    </div>;
}