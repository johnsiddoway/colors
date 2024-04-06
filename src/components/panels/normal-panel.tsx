import { PanelProps } from "./panel-props";
import styles from "./normal-panel.module.scss";

export function NormalPanel(props: PanelProps) {
    const buttons = props.themeColors.map((value, index) => {
        return <button key={index} className={styles.button}>{value.backgroundColor}</button>;
    })
    return <div>
        <h3 className={styles.heading}>Normal Buttons</h3>
        {buttons}
    </div>;
}