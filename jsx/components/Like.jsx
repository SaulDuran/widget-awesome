var React = require('react')
var mui = require('material-ui'),
    RaisedButton = mui.RaisedButton

var Like = React.createClass({
  displayName: 'Like',
  propTypes: {
    title: React.PropTypes.string.isRequired
  },
  getInitialState: function(){
    return {
      title: "Like",
      clicked: false
    }
  },
  _onclick: function(){
    this.setState({
      clicked: true,
      title: "Liked",
    });
  },
  render: function () {
    return (
      <div className='Header u-background--primary'>
        <RaisedButton onClick={this._onclick} label={this.state.title} primary={true} disabled={this.state.clicked}/>
      </div>
    )
  }
})

module.exports = Like;
