import { ColorPicker, useColor } from "react-color-palette";
import SwatchPanel from './swatch-panel';
import './app.scss'
import "react-color-palette/lib/css/styles.css";

export default function App() {
  const [color, setColor] = useColor("hex", "#F16B0E"); // #F10E23

  return <>
    <ColorPicker width={500} height={400} color={color} onChange={setColor} />
    <SwatchPanel {...{ color }} />
  </>;
};