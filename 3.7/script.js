class Stopwatch extends React.Component {
    constructor() {
        super()
        this.running = false;    
        this.reset();
    }

    reset() {
        this.state = {
            times: {
            minutes: 0,
            seconds: 0,
            miliseconds: 0
            }
        }
    }		

    format(times) {
        return `${pad0(times.minutes)}:${pad0(times.seconds)}:${pad0(Math.floor(times.miliseconds))}`;
    }

    start() {
        if (!this.running) {
            this.running = true;
            this.watch = setInterval(() => this.step(), 100);//Interwał odpala co 10 ms metodę step
        }
    }

    step() {
        if (!this.running) return;
        this.calculate();
    }

    calculate() {	
        let newTimes = {
            miliseconds: this.state.times.miliseconds,
            seconds: this.state.times.seconds,
            minutes: this.state.times.minutes
            };
 
            newTimes.miliseconds += 1;
 
            if (newTimes.miliseconds >= 100) {
                newTimes.seconds += 1;
                newTimes.miliseconds = 0;
            }
	    
            if (newTimes.seconds >= 60) {
                newTimes.minutes += 1;
                newTimes.seconds = 0;
            }
 
            this.setState(previousState => {
                return { times: newTimes };
        });
    }

    stop() {
        this.running = false;
        clearInterval(this.watch);
    }

    render() {
        const runningStopwatch = this.running ? 'running' : '';
            return (
                <div className='container'>
                    <nav className='buttons'>
                        <button onClick={(e) => this.start(e)}>Start</button>
                        <button onClick={(e) => this.stop(e)}>Stop</button>
                    </nav>
                    <div className={'stopwatch ' + runningStopwatch}>
                        {this.format(this.state.times)}
                    </div>
                </div>
            );		
    }
}

function pad0(value) {//Funkcja pad0 dodaje zero do liczb jednocyfrowych. 
    let result = value.toString();
    if (result.length < 2) {
        result = '0' + result;
    }
    return result;
}

ReactDOM.render(<Stopwatch/>, document.getElementById('app')); 