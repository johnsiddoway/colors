export interface Props {
	value: number;
	maxValue?: number;
	label: string;
	onChange: (count: number) => void;
}
export function CountPicker({ value, maxValue, label, onChange }: Props) {
	const options = [...Array(maxValue ?? 12)].map((e, i) => <option key={i} value={i+1}>{i+1}</option>);

	return <div className="picker">
		<label htmlFor="count">{label}</label>
		<div className="inputGroup">
			<select name="count" id="count" value={value} onChange={(e) => onChange(parseInt(e.target.value))}>
				{options}
			</select>
		</div>
	</div>;
}