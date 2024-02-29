export interface Props {
    id: string;
    value: number;
    onChange: (value: number) => void;
    min?: number;
    max?: number;
    step?: number;
};

export function RangePicker(props: Props) {
    return <div className="rangePicker">
        <label htmlFor={props.id}>Hover Color Shift</label>
        <div className="inputGroup">
            <input id={props.id} name={props.id} type="range" value={props.value} onChange={(e) => props.onChange(parseInt(e.target.value))} min={props.min ?? -100} max={props.max ?? 100} step={props.step ?? 5} />
            <div>{props.value}</div>
        </div>
    </div>;
};