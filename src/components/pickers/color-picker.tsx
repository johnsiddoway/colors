import { useCallback, useRef, useState } from "react";
import { useClickOutside } from "../../hooks/useClickOutside";
import { HexColorPicker } from "react-colorful";
import styles from "./color-picker.module.scss";

export interface ThemeColorPickerProps {
    backgroundColor: string;
    label: string;
    onChange: (color: string) => void;
};
export function ColorPicker({ backgroundColor, label, onChange }: ThemeColorPickerProps) {
	const [isOpen, toggle] = useState(false);
	const [color, setColor] = useState(backgroundColor);
	const popover = useRef();
	const close = useCallback(() => toggle(false), []);
	useClickOutside(popover, close);

	const popoverDisplay = isOpen
		? <div className={styles.backgroundColorPopup} ref={popover}><HexColorPicker color={backgroundColor} onChange={onChange} /></div>
		: <></>;

	return <div className={styles.picker}>
		<div className={styles.labelRow}>
			<label htmlFor={label}>{label}</label>
		</div>
		<div className={styles.inputRow}>
			<input id={label} type="text" className={styles.backgroundColorInput} value={color} onBlur={() => onChange(color)} onChange={(e) => setColor(e.target.value)} />
			<div className={styles.backgroundColorSwatch} style={{ backgroundColor: backgroundColor }} onClick={() => toggle(true)} />
			{popoverDisplay}
		</div>
	</div>;
};