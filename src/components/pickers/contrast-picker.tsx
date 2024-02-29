export interface Props {
	value: number,
	label: string,
	onChange: (value: number) => void,
}
export function ContrastPicker({ value, label, onChange }: Props) {
	return <div className="picker">
		<label htmlFor="contrast">{label}</label>
		<div className="inputGroup">
			<select name="contrast" id="contrast" value={value} onChange={(e) => onChange(parseFloat(e.target.value))}>
				<option value="3">3:1 (AA large text)</option>
				<option value="4.5">4.5:1 (AAA large text)</option>
				<option value="7">7:1 (AAA normal text)</option>
			</select>
		</div>
	</div>;
}