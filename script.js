const DateDisplay = (props) => {
    return <h2>The time now is {props.date.toLocaleTimeString()}.</h2>
  }
  
  DateDisplay.defaultProps = {
    date: new Date()
  }
  
  class Clock extends React.Component {
    static defaultProps = {
      secondsShift: 0
    }
  
    constructor (props) {
      super(props);
      const date = new Date();
      date.setSeconds(date.getSeconds() + props.secondsShift);
  
      this.state = { date };
    }
  
    componentDidMount () {
      this.timer = setInterval(
        () => this.updateTime(),
        1000
      );
    }
  
    componentWillUnmount () {
      clearInterval(this.timer);
    }
  
    updateTime () {
      const date = new Date();
      date.setSeconds(date.getSeconds() + this.props.secondsShift);
  
      this.setState({ date });
    }
  
    render () {
      return (
        <div>
          <DateDisplay date={this.state.date} />
        </div>
      )
    }
  }
  
  // Clock.defaultProps = {
  //   secondsShift: 0
  // }
  
  const App = () => {
    return (
      <React.Fragment>
        <Clock />
        <Clock secondsShift={10} />
        <Clock secondsShift={20} />
      </React.Fragment>
    )
  }
  
  const container = document.getElementById('root');
  const root = ReactDOM.createRoot(container);
  root.render(<App />);