import React from "react";
import {PageProps} from "../App";
import "../styles/PageContainers.scss";
import DefaultHeader from "../components/DefaultHeader";

import defaultLogo from "../static/assets/logo/fv_default.png";
import animatedLogo from "../static/assets/logo/fv_animated.gif";

export default class HomePage extends React.Component<HomePageProps, HomePageState> {
	static id = "HomePage";
	
	constructor(props: any) {
		super(props);
		this.state = {}
	}
	
	render() {
		return <>
			<DefaultHeader app={this.props.app}/>
			<div className={"page homePageContainer"}>
				<img src={animatedLogo} alt={""}/>
				Work in progress...
				
			</div>
		</>;
	}
	
	componentDidMount() {}
}

interface HomePageProps extends PageProps {}

interface HomePageState {}