import React from "react";
import {PageProps} from "../App";
import "../styles/PageContainers.scss";
import DefaultHeader from "../components/DefaultHeader";

import defaultLogo from "../static/assets/logo/fv_default.png";

export default class NewsPage extends React.Component<NewsPageProps, NewsPageState> {
	static id = "NewsPage";
	
	constructor(props: any) {
		super(props);
		this.state = {}
	}
	
	render() {
		return <>
			<DefaultHeader app={this.props.app}/>
			<div className={"page newsPageContainer"}>
				News
			</div>
		</>;
	}
	
	componentDidMount() {}
}

interface NewsPageProps extends PageProps {}

interface NewsPageState {}