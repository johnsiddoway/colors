import { useCallback, useRef, useState } from "react";
import { HexColorPicker } from "react-colorful";
import { useClickOutside } from "../../hooks/useClickOutside";
import { ThemeColor } from "../../types/state";
import styles from "./theme-color-picker.module.scss";

export interface ThemeColorPickerProps {
	index: number;
    backgroundColor: string;
    invertForegroundColor: boolean;
    label: string;
    onChange: (color: ThemeColor) => void;
};
export function ThemeColorPicker({ index, backgroundColor, invertForegroundColor, label, onChange }: ThemeColorPickerProps) {
	const [isOpen, toggle] = useState(false);
	const [color, setColor] = useState(backgroundColor);
	const popover = useRef();
	const close = useCallback(() => toggle(false), []);
	useClickOutside(popover, close);

	const backgroundId = index + "-background";
	const foregroundId = index + "-foreground";
	const popoverDisplay = isOpen ? <div className={styles.backgroundColorPopup} ref={popover}><HexColorPicker color={backgroundColor}
		onChange={(backgroundColor) => onChange({ backgroundColor, invertForegroundColor })} /></div>
		: <></>;

	return <div className={styles.picker}>
		<div className={styles.labelRow}>
			<label htmlFor={backgroundId}>{label}</label>
			<label htmlFor={foregroundId} className={styles.foregroundColorLabel}>Text Color</label>
		</div>
		<div className={styles.inputRow}>
			<input id={backgroundId} type="text" className={styles.backgroundColorInput} value={color}
				onBlur={() => onChange({ backgroundColor: color, invertForegroundColor })} onChange={(e) => setColor(e.target.value)} />
			<div className={styles.backgroundColorSwatch} style={{ backgroundColor: backgroundColor }} onClick={() => toggle(true)} />
			<input id={foregroundId} type="checkbox" checked={invertForegroundColor} className={styles.foregroundColorInput}
				onChange={() => onChange({ backgroundColor, invertForegroundColor: !invertForegroundColor })} />
			{popoverDisplay}
		</div>
	</div>;
};