import { DotLoader } from "react-spinners"
import css from "./Loader.module.css"

export function Loader(props) {
    return <DotLoader color="#455A64" cssOverride={{margin: "16px auto 0"}} loading={props.loading}/>;
}