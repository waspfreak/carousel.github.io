var GreeterMessage = React.createClass({
    render: function () {
      var name = this.props.name;
      var description = this.props.description;

      return (
        <div>
          <h1>Some {name}</h1>
          <p>Some {description + '!!'}</p>
        </div>
      );
    }
});

var GreeterForm = React.createClass({
  onFormSubmit: function(e){
    e.preventDefault();

    var name = this.refs.name.value;
    if (name.length > 0){
      this.refs.name.value = '';
      this.props.onNewName(name);
    }
  },

  render: function(){
    return(
      <form onSubmit={this.onFormSubmit} >
          <input type="text" ref="name"/>
          <button>Add new info</button>
      </form>
    );
  }
});

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

  handleNewName: function(name){
      this.setState({
        name:name
      })
  },

  render: function(){

    var name = this.state.name;
    var description = this.props.description;

    return(
      <div>

      <GreeterMessage name={name} description={description}/>
      <GreeterForm onNewName={this.handleNewName}/>


      </div>
    );
  }
});

//TEST DEFAULT

var name = "My Event title";
var description = 'This is from my component use "var"';

  ReactDOM.render(
    <Greeter name={name} description={description}/>,
    document.getElementById('app')
  );
