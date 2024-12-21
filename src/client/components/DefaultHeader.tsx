import "../styles/DefaultHeader.scss";
import React from "react";
import whiteLogo from "../static/assets/logo/fv_white.png";
import TextButton from "./TextButton";
import {PageProps} from "../App";

//todo implement parameters for future header contents (profile, etc)
export default class DefaultHeader extends React.Component<PageProps, any> {
	constructor(props: PageProps) {
		super(props);
		this.state = {}
	}
	
	render() {
		return <div className={"defaultHeaderContainer"}>
			<img onClick={() => {
				this.props.app.setPage("/", true, null)
			}} src={whiteLogo} alt={""}/>
			<div className={"defaultHeaderButtons"}>
				<TextButton text={"News"} onClick={() => {
					this.props.app.setPage("/news", true, null);
				}}/>
				<TextButton text={"Schedule"} onClick={() => {
					this.props.app.setPage("/schedule", true, null);
				}}/>
				<TextButton text={"History"} onClick={() => {
					this.props.app.setPage("/history", true, null);
				}}/>
				<TextButton text={"Drivers"} onClick={() => {
					this.props.app.setPage("/drivers", true, null);
				}}/>
				<TextButton text={"Academies"} onClick={() => {
					this.props.app.setPage("/academies", true, null);
				}}/>
				<TextButton text={"Teams"} onClick={() => {
					this.props.app.setPage("/teams", true, null);
				}}/>
				<TextButton text={"Live"} onClick={() => {
					this.props.app.setPage("/live", true, null);
				}}/>
			</div>
		</div>;
	}
}