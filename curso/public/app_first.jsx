
var Greeter = React.createClass({
  getDefaultProps: function(){
    return{
      name: 'React',
      description: 'This is from my component'
    };
  },
  getInitialState: function(){
    return{
      name: this.props.name
    };
  },

  onButtonClick: function(e){
      e.preventDefault();

      var nameRef = this.refs.name; //add nameRef for simplify the expretion
      var name = nameRef.value;
      nameRef.value = ""; //for empty input after

      //If for only change the name if the input is not empty
      if(typeof name === 'string' && name.length > 0){
        this.setState({
          name: name
        });
      }

  },

  render: function(){

    var name = this.state.name;
    var description = this.props.description;

    return(
      <div>
        <h1>Hello {name}! we love react</h1>
        <p>{description + '!!'}</p>

      <form onSubmit={this.onButtonClick}>
          <input type="text" ref="name"/>
          <button>Set Name</button>
      </form>

      </div>
    );
  }
});

var firstName = "Andrew";
var description = 'This is from my component use "var"';

  ReactDOM.render(
    <Greeter name={firstName} description={description}/>,
    document.getElementById('app')
  );
