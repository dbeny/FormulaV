import React from "react";
import {PageProps} from "../App";
import "../styles/PageContainers.scss";
import DefaultHeader from "../components/DefaultHeader";
import DoubleCard from "../components/DoubleCard";

import animatedLogo from "../static/assets/logo/fv_animated.gif";
import banner from "../static/assets/images/fv_banner.png";
import lineup from "../static/assets/images/s12_lineup_artwork.png";
import crown from "../static/assets/images/3xcrown.png";

export default class HomePage extends React.Component<HomePageProps, HomePageState> {
	static id = "HomePage";
	
	constructor(props: any) {
		super(props);
		this.state = {}
	}
	
	render() {
		return <>
			<DefaultHeader app={this.props.app} api={this.props.api}/>
			<div className={"page homePageContainer"}>
				<img className={"homePageLogo"} src={animatedLogo} alt={""}/>
				<h1>What is Formula V?</h1>
				<DoubleCard
					imageLeft={false}
					title={"Lights On, Engines Ready!"}
					content={"Get ready for the thrill of a lifetime with our high-octane events, featuring the S80, Formula 2, and our most anticipated Formula 1 League—and many more to keep the excitement alive!"}
					image={banner}/>
				<DoubleCard
					imageLeft={true}
					title={"Who Can Race?"}
					content={"Think you’ve got what it takes to compete? Pass our simple racing test, and you’re in the running for the F1 league. "}
					image={lineup}/>
				<DoubleCard
					imageLeft={false}
					title={"Join the Action, On or Off the Track!"}
					content={"Not a racer? No problem!\n" +
						"\n" +
						"Join our FIA Team to help organize races and keep the server on track.\n" +
						"Love creating content? Be part of our Media Team and craft epic edits.\n" +
						"\n" +
						"Prefer chatting about real-life F1? Connect with fellow fans in our F1 Nerds community.\n" +
						"There’s a place for everyone in our racing universe. \n"}
					image={crown}/>
			</div>
		</>;
	}
	
	componentDidMount() {}
}

interface HomePageProps extends PageProps {}

interface HomePageState {}