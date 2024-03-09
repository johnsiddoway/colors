import { useCallback, useRef, useState } from "react";
import { HexColorPicker } from "react-colorful";
import { useClickOutside } from "../../hooks/useClickOutside";
import { ThemeColor } from "../../types/state";
import styles from "./theme-color-picker.module.scss";

export interface ThemeColorPickerProps {
    backgroundColor: string;
    invertForegroundColor: boolean;
    label: string;
    onChange: (color: ThemeColor) => void;
};
export function ThemeColorPicker({ backgroundColor, invertForegroundColor, label, onChange }: ThemeColorPickerProps) {
	const [isOpen, toggle] = useState(false);
	const [color, setColor] = useState(backgroundColor);
	const popover = useRef();
	const close = useCallback(() => toggle(false), []);
	useClickOutside(popover, close);

	const invertForegroundColorId = label + '-foreground';
	const popoverDisplay = isOpen ? <div className={styles.backgroundColorPopup} ref={popover}><HexColorPicker color={backgroundColor}
		onChange={(backgroundColor) => onChange({ backgroundColor, invertForegroundColor })} /></div>
		: <></>;

	return <div className={styles.picker}>
		<label htmlFor={label}>{label}</label>
		<div className={styles.inputGroup}>
			<div className={styles.backgroundColorRow}>
				<input id={label} type="text" className={styles.backgroundColorInput} value={color}
					onBlur={() => onChange({ backgroundColor: color, invertForegroundColor })} onChange={(e) => setColor(e.target.value)} />
				<div className={styles.backgroundColorSwatch} style={{ backgroundColor: backgroundColor }} onClick={() => toggle(true)} />
				{popoverDisplay}
			</div>
			<div className={styles.foregroundColorRow}>
				<label htmlFor={invertForegroundColorId} className={styles.foregroundColorLabel}>Invert Foreground?</label>
				<input id={invertForegroundColorId} type="checkbox" checked={invertForegroundColor} className={styles.foregroundColorInput}
					onChange={() => onChange({ backgroundColor, invertForegroundColor: !invertForegroundColor })} />
			</div>
		</div>
	</div>;
};