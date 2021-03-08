//import React from "react";
import React, { useState } from "react";
//import { Luces } from "./luces.js";

//create your first component
export function Home() {
	var [clickedLight, setClicked] = useState("");

	let redClass = "";
	let yellowClass = "";
	let greenClass = "";

	if (clickedLight == "red") redClass = "select";

	if (clickedLight == "yellow") yellowClass = "select";

	if (clickedLight == "green") greenClass = "select";

	return (
		<div>
			<div id="trafficTop"></div>
			<div id="container">
				<div
					className={"red light " + redClass}
					onClick={() => setClicked((clickedLight = "red"))}></div>
				<div
					className={"yellow light " + yellowClass}
					onClick={() => setClicked((clickedLight = "yellow"))}></div>
				<div
					className={"green light " + greenClass}
					onClick={() => setClicked((clickedLight = "green"))}></div>
			</div>
		</div>
	);
}
