class Stopwatch extends React.component {
    constructor() {
        super();
        this.running = false;
        //this.display = display;
        this.reset();
        //this.print(this.times);
    }

    reset() {
        this.times = {
            minutes: 0,
            seconds: 0,
            miliseconds: 0
        };
    }

    //print() {
    //    this.display.innerText = this.format(this.times);
    //}

    format(times) {
        return `${pad0(times.minutes)}:${pad0(times.seconds)}:${pad0(Math.floor(times.miliseconds))}`;
    }
    
    start() {
        if (!this.running) {
            this.running = true;
            this.watch = setInterval( () => this.step(), 10);
        }
    }
    
    step() {
        if (!this.running) return;
        this.calculate();
        //this.print();
    }
    
    calculate() {
        let newTimes = {
			miliseconds: this.state.times.miliseconds,
			seconds : this.state.times.seconds,
			minutes: this.state.times.minutes
		};
        
        newTimes.miliseconds += 1;
        
        if(newTimes.miliseconds >= 100) {
			newTimes.seconds += 1;
			newTimes.miliseconds = 0;
		}
		if (newTimes.seconds >=60) {
			newTimes.minutes += 1;
			newTimes.seconds = 0;
		}
		this.setState({times: newTimes});
    }
    
    stop() {
        this.running = false;
        clearInterval(this.watch);
    }
    
    render() {
        return (
            <div className='container'>
				<nav className='buttons'>
					<button onClick={e => this.start(e)}>Start</button>
					<button onClick={e => this.stop(e)}>Stop</button>
				</nav>
				{this.format(this.state.times)}
			</div>
        )
    }
}

function pad0(value) {
    let result = value.toString();
    if (result.length < 2) {
        result = '0' + result;
    }
    return result;
}

ReactDOM.render(<Stopwatch/>, document.getElementById('app'));