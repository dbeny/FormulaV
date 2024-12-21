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
				<DoubleCard
					imageLeft={true}
					title={"Where does F1 race?"}
					content={"Some sports play stadiums. Our 'stadiums' span cities. With 24 races in amazing locations across 5 continents, Formula 1 is truly an international sport."}
					image={"https://media.formula1.com/image/upload/t_16by9South/f_auto/q_auto/v1700391768/trackside-images/2023/F1_Grand_Prix_of_Las_Vegas___Race/1801966266.jpg"}/>
				<DoubleCard
					imageLeft={false}
					title={"How do I follow F1?"}
					content={"You know the F1 drivers and teams. You know where we race. Now find out how you can be part of the action, and how you can follow Formula 1 and support your heroes from wherever you are in the world."}
					image={"https://media.formula1.com/image/upload/t_16by9Centre/f_auto/q_auto/v1682606473/Fans2_1920x1080.jpg"}/>
				<DoubleCard
					imageLeft={true}
					title={"Get under the hood of F1"}
					content={"F1 boasts technology that’s innovative, ground-breaking – and life-saving. F1 cars already use the world's most efficient engine, while the sport’s engineers are locked in an all-out battle to beat the stopwatch... and their rivals!"}
					image={"https://media.formula1.com/image/upload/t_16by9Centre/f_auto/q_auto/v1682441685/GettyImages-1372359131.jpg"}/>
			</div>
		</>;
	}
	
	componentDidMount() {}
}

interface HomePageProps extends PageProps {}

interface HomePageState {}