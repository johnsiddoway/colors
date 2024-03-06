import { useCallback, useRef, useState } from "react";
import { useClickOutside } from "../../hooks/useClickOutside";
import { HexAlphaColorPicker } from "react-colorful";

function PopoverPicker({ color, onChange }: { color: string, onChange: (color: string) => void }) {
	const popover = useRef();
	const [isOpen, toggle] = useState(false);

	const close = useCallback(() => toggle(false), []);
	useClickOutside(popover, close);

	return <div className="popoverPicker">
		<div className="swatch" style={{ backgroundColor: color }} onClick={() => toggle(true)} />
		{isOpen && (
			<div className="popover" ref={popover}>
				<HexAlphaColorPicker color={color} onChange={onChange} />
			</div>
		)}
	</div>;
}

export function ColorPicker({ color, onChange, label }: { color: string, onChange: (color: string) => void, label: string }) {
	return <div className="picker">
		<label htmlFor={label}>{label}</label>
		<div className="inputGroup">
			<input id={label} value={color} readOnly />
			<PopoverPicker color={color} onChange={onChange} />
		</div>
	</div>;
}
