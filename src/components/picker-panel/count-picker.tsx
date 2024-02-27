export interface Props {
	count: number,
	label: string,
	onChange: (count: number) => void,
}
export function CountPicker({ count, label, onChange }: Props) {
	return <div className="colorPicker">
		<label htmlFor="count">{label}</label>
		<div className="inputGroup">
			<select name="count" id="count" value={count} onChange={(e) => onChange(parseInt(e.target.value))}>
				<option value="1">1</option>
				<option value="2">2</option>
				<option value="3">3</option>
				<option value="4">4</option>
			</select>
		</div>
	</div>;
}