import { useCallback, useRef, useState } from "react";
import { HexColorInput, HexColorPicker } from "react-colorful";
import { useClickOutside } from "../../hooks/useClickOutside";
import { ThemeColor } from "../../types";
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
	const popover = useRef();
	const close = useCallback(() => toggle(false), []);
	useClickOutside(popover, close);

	const backgroundId = index + "-background";
	const foregroundId = index + "-foreground";
	const popoverDisplay = isOpen ? <div className={styles.popup} ref={popover}><HexColorPicker color={backgroundColor}
		onChange={(backgroundColor) => onChange({ backgroundColor, invertForegroundColor })} /></div>
		: <></>;

	return <div className={styles.picker}>
		<div className={styles.labelRow}>
			<label htmlFor={backgroundId}>{label}</label>
			<label htmlFor={foregroundId} className={styles.foregroundColorLabel}>Text Color</label>
		</div>
		<div className={styles.inputRow}>
			<HexColorInput id={backgroundId} className={styles.backgroundColorInput} color={backgroundColor} onChange={(color) => onChange({ backgroundColor: color, invertForegroundColor })} />
			<div className={styles.backgroundColorSwatch} style={{ backgroundColor: backgroundColor }} onClick={() => toggle(true)} />
			<input id={foregroundId} type="checkbox" checked={invertForegroundColor} className={styles.foregroundColorInput}
				onChange={() => onChange({ backgroundColor, invertForegroundColor: !invertForegroundColor })} />
			{popoverDisplay}
		</div>
	</div>;
};