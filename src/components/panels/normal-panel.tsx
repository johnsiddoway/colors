import { PanelProps } from "./panel-props";
import styles from "./base.module.scss";

export function NormalPanel(props: PanelProps) {
    const buttons = props.themeColors.map((value, index) => {
        const style: React.CSSProperties = {
            "--background-color": value.backgroundColor,
            "--background-color-hover": value.backgroundColor,
            "--background-color-active": value.backgroundColor,
            "--color": value.invertForegroundColor ? props.backgroundColor : props.foregroundColor,
            "--border-color": props.foregroundColor,
        };
        return <div key={index}>
            <div className={styles.label}>Theme Color {index + 1}</div>
            <button className={styles.button} style={style}>{value.backgroundColor}</button>
            </div>;
    })
    return <div>
        <h3 className={styles.heading}>Normal Buttons</h3>
        {buttons}
    </div>;
}