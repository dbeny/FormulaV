import React from "react";
import {PageProps} from "../App";

export default class HomePage extends React.Component<HomePageProps, HomePageState> {
	static id = "HomePage";
	
	constructor(props: any) {
		super(props);
		this.state = {}
	}
	
	render() {
		return <>
		
		</>;
	}
	
	componentDidMount() {}
}

interface HomePageProps extends PageProps {

}

interface HomePageState {

}