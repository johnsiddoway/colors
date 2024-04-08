import { PanelProps } from "./panel-props";
import styles from "./base.module.scss";
import { ButtonExample } from "./button-examples";

export function NormalPanel(props: PanelProps) {
    const buttons = props.themeColors.map((value, index) => {
        return <div key={index}>
            <div className={styles.label}>Theme Color {index + 1}</div>
            <ButtonExample
                borderColor={props.foregroundColor}
                foregroundColor={value.invertForegroundColor ? props.backgroundColor : props.foregroundColor}
                backgroundColor={value.backgroundColor}
                hoverColor={value.backgroundColor}
                activeColor={value.backgroundColor}
                buttonText={value.backgroundColor}
                contrastRatio={props.contrastRatio} />
        </div>;
    });
    return <div>
        <h3 className={styles.heading}>Normal Buttons</h3>
        {buttons}
    </div>;
}