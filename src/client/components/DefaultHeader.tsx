import "../styles/DefaultHeader.scss";
import React from "react";

import outlineLogo from "../static/assets/logo/fv_outline.png";
import TextButton from "./TextButton";

//todo implement parameters for future header contents (profile, etc)
export default function DefaultHeader() {
	return (
		<div className={"defaultHeaderContainer"}>
			<img src={outlineLogo} alt={""}/>
			<div className={"flex-1"}></div>
			<div className={"defaultHeaderButtons"}>
				<TextButton text={"Test"} clicked={() => {
					console.log("not working yet (already getting clicked)");
				}}/>
			</div>
		</div>
	);
}