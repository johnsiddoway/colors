import { useCallback, useRef, useState } from "react";
import { useClickOutside } from "../../hooks/useClickOutside";
import { HexColorInput, HexColorPicker } from "react-colorful";
import styles from "./color-picker.module.scss";

export interface ThemeColorPickerProps {
	color: string;
	label: string;
	onChange: (color: string) => void;
};
export function ColorPicker({ color, label, onChange }: ThemeColorPickerProps) {
	const [isOpen, toggle] = useState(false);
	const popover = useRef();
	const close = useCallback(() => toggle(false), []);
	useClickOutside(popover, close);

	const popoverDisplay = isOpen
		? <div className={styles.popup} ref={popover}><HexColorPicker color={color} onChange={onChange} /></div>
		: <></>;

	return <div className={styles.picker}>
		<div className={styles.labelRow}>
			<label htmlFor={label}>{label}</label>
		</div>
		<div className={styles.inputRow}>
			<HexColorInput id={label} className={styles.input} color={color} onChange={onChange} />
			<div className={styles.swatch} style={{ backgroundColor: color }} onClick={() => toggle(true)} />
			{popoverDisplay}
		</div>
	</div>;
};