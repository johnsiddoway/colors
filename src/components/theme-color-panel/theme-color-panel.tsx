import { Action, State } from "../../types/state";

export interface Props extends State {
	dispatch: React.Dispatch<Action>;
}
export function ThemeColorPanel(props: Props) {
	return <>Theme Colors Go Here Now</>;
}