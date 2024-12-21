import React from "react";
import {PageProps} from "../App";
import "../styles/PageContainers.scss";
import DefaultHeader from "../components/DefaultHeader";

import defaultLogo from "../static/assets/logo/fv_default.png";
import animatedLogo from "../static/assets/logo/fv_animated.gif";
import DoubleCard from "../components/DoubleCard";

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
				<img className={"homePageLogo"} src={animatedLogo} alt={""}/>
				<h1>What is Formula V?</h1>
				
				<DoubleCard
					imageLeft={false}
					title={"Start lights"}
					content={"How does the F1 weekend work? What’s F1 Sprint? And why is it called Formula 1? You’ve got questions – we’ve got answers..."}
					image={"https://media.formula1.com/image/upload/t_16by9South/f_auto/q_auto/v1709392049/trackside-images/2024/F1_Grand_Prix_of_Bahrain/2053149561.jpg"}/>
				<DoubleCard
					imageLeft={true}
					title={"Who races in F1?"}
					content={"Extreme g-forces. Daring decisions made in the blink of an eye – and at 370km/h. Dramatically battling to be the best, Formula 1 drivers are more like fighter pilots than sportspeople. Only 20 get the chance to compete, and they push themselves – and their incredible machines – to the very limit."}
					image={"https://media.formula1.com/image/upload/t_16by9South/f_auto/q_auto/v1708541586/trackside-images/2024/Formula_1_Testing_in_Bahrain___Drivers_Photocall/2028268909.jpg"}/>
				<DoubleCard
					imageLeft={false}
					title={"Who are the F1 teams?"}
					content={"Formula 1 is a team sport. It needs to be to change all 4 tyres on a car in under 2 seconds! F1 teams design and build their cars and get them ready to race. Each has their own history. Each has their own unique approach. All want to be the fastest. But who should you root for?"}
					image={"https://media.formula1.com/image/upload/t_16by9Centre/f_auto/q_auto/v1682606473/Teams_1920x1080.jpg"}/>
			</div>
		</>;
	}
	
	componentDidMount() {}
}

interface HomePageProps extends PageProps {}

interface HomePageState {}