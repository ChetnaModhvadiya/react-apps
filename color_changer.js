/*
 * A simple React component using class
 */
class Application extends React.Component {
  state = {
    color: 'red'
  }
  
  handleChange = (color) => {
    const change = () => {
      this.setState({ color });
    }
    return change.bind(this);
  }
  
  render() {
    const colors = this.props?.colors || ['red', 'green', 'blue'];
    const button = { margin: '5px', fontSize: '1rem' };
    const list = { display: 'flex', alignItems: 'center', justifyContent: 'center', flexWrap: 'wrap'}
    const text = { color: this.state.color };
    return <div>
      <h1 style={text}>Hello, ES6 and React 0.13!</h1>
      <div style={list}>
        {colors.map((color) => <button style={button} onClick={this.handleChange(color)}>{color}</button>)}
      </div>
    </div>;
  }
}

/*
 * Render the above component into the div#app
 */
const colorsList = [
  'red',
  'green',
  'blue',
  'yellow',
  'black',
  'white',
  'pink',
  'maroon',
  'purple',
  'cyan',
  'orange'
]

React.render(<Application colors={colorsList} />, document.getElementById('app'));
