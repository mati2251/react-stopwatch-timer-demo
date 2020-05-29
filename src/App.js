import React, {useState} from 'react';
import './App.css';
import ReactTimerStopwatch from 'react-stopwatch-timer';

const App = () => {

	const fromTime = new Date(0, 0, 0, 0, 0, 0, 0);
	const fromTime2 = new Date(0, 0, 0, 0, 10, 0, 0);
	const [isOn, setIsOn] = useState(false);

	return (
		<>
			<ReactTimerStopwatch isOn={true} className="react-stopwatch-timer__table" watchType="stopwatch"/>
			<ReactTimerStopwatch isOn={true} className="react-stopwatch-timer__table" watchType="stopwatch"
			                     displayCircle={true} color="gray" hintColor="red"/>
			<ReactTimerStopwatch isOn={true} className="react-stopwatch-timer__table" watchType="stopwatch"
			                     displayCircle={true} color="gray" hintColor="red" fromTime={fromTime}/>
			<ReactTimerStopwatch isOn={true} className="react-stopwatch-timer__table" watchType="timer"
			                     displayCircle={true} color="gray" hintColor="red" fromTime={fromTime2}/>
			<ReactTimerStopwatch isOn={true} className="react-stopwatch-timer__table" watchType="timer"
			                     displayCircle={true} color="gray" hintColor="red" fromTime={fromTime2}
			                     displayHours={false}/>
			<ReactTimerStopwatch isOn={isOn} className="react-stopwatch-timer__table" watchType="timer"
			                     displayCircle={true} color="gray" hintColor="red" fromTime={fromTime2} displayHours={false}>
				<button onClick={() => setIsOn(true) }>START</button>
			</ReactTimerStopwatch>
		</>
	);
}

export default App;
