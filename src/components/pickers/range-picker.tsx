import styles from "./range-picker.module.scss";

export interface Props {
	id: string;
	label: string;
	value: number;
	onChange: (value: number) => void;
	min?: number;
	max?: number;
	step?: number;
};

export function RangePicker(props: Props) {
	return <div className={styles.picker}>
		<label htmlFor={props.id}>{props.label}</label>
		<div className={styles.inputRow}>
			<input className={styles.input} id={props.id} name={props.id} type="range" value={props.value} onChange={(e) => props.onChange(parseInt(e.target.value))} min={props.min ?? -100} max={props.max ?? 100} step={props.step ?? 5} />
			<div className={styles.swatch}>
				<div>{props.value}</div>
			</div>
		</div>
	</div>;
};