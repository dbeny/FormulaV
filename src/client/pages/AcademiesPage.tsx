import React from "react";
import {PageProps} from "../App";
import "../styles/PageContainers.scss";
import DefaultHeader from "../components/DefaultHeader";

import defaultLogo from "../static/assets/logo/fv_default.png";

export default class AcademiesPage extends React.Component<AcademiesPageProps, AcademiesPageState> {
	static id = "AcademiesPage";
	
	constructor(props: any) {
		super(props);
		this.state = {}
	}
	
	render() {
		return <>
			<DefaultHeader app={this.props.app} api={this.props.api}/>
			<div className={"page academiesContainer"}>
				Academies
			</div>
		</>;
	}
	
	componentDidMount() {}
}

interface AcademiesPageProps extends PageProps {}

interface AcademiesPageState {}