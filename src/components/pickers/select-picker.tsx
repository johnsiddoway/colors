import styles from "./select-picker.module.scss";

export interface Props {
    name: string;
	value: any;
	label: string;
	options: { value: number | string; label: number | string; }[];
	onChange: (value: any) => void;
}
export function SelectPicker({ name, value, label, options, onChange }: Props) {
	return <div className={styles.picker}>
		<label htmlFor={name} className={styles.label}>{label}</label>
		<select name={name} id={name} className={styles.select} value={value} onChange={(e) => onChange(e.target.value)}>
			{options.map((o, i) => <option key={i} value={o.value}>{o.label}</option>)}
		</select>
	</div>;
}