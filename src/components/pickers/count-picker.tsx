export interface Props {
	value: number,
	label: string,
	onChange: (count: number) => void,
}
export function CountPicker({ value, label, onChange }: Props) {
	return <div className="picker">
		<label htmlFor="count">{label}</label>
		<div className="inputGroup">
			<select name="count" id="count" value={value} onChange={(e) => onChange(parseInt(e.target.value))}>
				<option value="1">1</option>
				<option value="2">2</option>
				<option value="3">3</option>
				<option value="4">4</option>
			</select>
		</div>
	</div>;
}