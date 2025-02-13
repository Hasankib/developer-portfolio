import React, { useEffect } from "react";
import { greetings } from "../portfolio";

import { Button, Container, Row, Col } from "reactstrap";

import GreetingLottie from "../components/DisplayLottie";
import SocialLinks from "../components/SocialLinks";

const Greetings = () => {
	useEffect(() => {
		document.documentElement.scrollTop = 0;
		document.scrollingElement.scrollTop = 0;
	});
	return (
		<main>
			<div className="position-relative">
				<section className="section section-lg section-shaped pb-250">
					<div className="shape shape-style-1 bg-gradient-info">
						<span />
						<span />
						<span />
						<span />
						<span />
						<span />
						<span />
						<span />
						<span />
					</div>
					<Container className="py-lg-md d-flex">
						<div className="col px-0">
							<Row>
								<Col lg="6">
									<h1 className="display-3 text-white">
										{greetings.title + " "}
									</h1>
									<p className="lead text-white">
									a Software Engineering student from Ontario, Canada looking for new opportunities to solve problems through technological means. Currently, I am open for Summer 2022 software internship positions. Check out the links below or my <a href="https://drive.google.com/file/d/1fJVBUKFaXpB6z8_E9wtiz4zvPjSYlcGq/view?usp=sharing">resume</a> for more information about me!
									</p>
									<SocialLinks />
									<div className="btn-wrapper my-4">
										{/* <Button
											className="btn-white btn-icon mb-3 mb-sm-0 ml-1"
											color="default"
											href={greetings.resumeLink}
										>
											<span className="btn-inner--icon mr-1">
												<i className="fa fa-file" />
											</span>
											<span className="btn-inner--text">
												See My Resume
											</span>
										</Button> */}
									</div>
								</Col>
								<Col lg="6">
									<GreetingLottie animationPath="/lottie/coding.json" />
								</Col>
							</Row>
						</div>
					</Container>
					{/* SVG separator */}
					<div className="separator separator-bottom separator-skew">
						<svg
							xmlns="http://www.w3.org/2000/svg"
							preserveAspectRatio="none"
							version="1.1"
							viewBox="0 0 2560 100"
							x="0"
							y="0"
						>
							<polygon
								className="fill-white"
								points="2560 0 2560 100 0 100"
							/>
						</svg>
					</div>
				</section>
				{/* 1st Hero Variation */}
			</div>
		</main>
	);
};

export default Greetings;
