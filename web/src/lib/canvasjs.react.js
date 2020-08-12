const React = require('react');
let CanvasJS = require('./canvasjs.min');

CanvasJS = CanvasJS.Chart ? CanvasJS : window.CanvasJS;

class CanvasJSChart extends React.Component {
	static _cjsContainerId = 0

	constructor(props) {		
	  super(props);		
	  this.options = props.options ? props.options : {};		
	  this.containerProps = props.containerProps ? props.containerProps : { width: "100%", position: "relative" };

	  // eslint-disable-next-line no-nested-ternary
	  this.containerProps.height = (props.containerProps && props.containerProps.height) ? props.containerProps.height : (this.options.height) ? `${this.options.height  }px` : "400px";
	  // eslint-disable-next-line no-underscore-dangle
	  this.chartContainerId = `canvasjs-react-chart-container-${  CanvasJSChart._cjsContainerId}${1}`;
	}
	
	componentDidMount() {
	  // Create Chart and Render
	  const { onRef }=this.props;
	  this.chart = new CanvasJS.Chart(this.chartContainerId, this.options);
	  this.chart.render();
		
	  if(onRef)
		  // eslint-disable-next-line react/destructuring-assignment
	    onRef(this.chart);
	}
	
	shouldComponentUpdate(nextProps, nextState){
	  // Check if Chart-options has changed and determine if component has to be updated
	  return !(nextProps.options === this.options);
	}

	componentDidUpdate() {
	  // Update Chart Options & Render
	  const { options } = this.props;
	  this.chart.render();
	}

	componentWillUnmount() {
	  // Destroy chart and remove reference
	  const { onRef }=this.props;
	  this.chart.destroy();
	  if(onRef)
	    onRef(undefined);
	}
		
	render() {		
	  // return React.createElement('div', { id: this.chartContainerId, style: this.containerProps });		
	  return <div id={this.chartContainerId} style={this.containerProps} />		
	}	
}

const CanvasJSReact = {
  CanvasJSChart,
  CanvasJS
};

export default CanvasJSReact;