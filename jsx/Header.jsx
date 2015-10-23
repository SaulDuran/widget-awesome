var React = require('react')
var mui = require('material-ui'),
    RaisedButton = mui.RaisedButton

module.exports = React.createClass({
  displayName: 'Header.jsx',
  propTypes: {
    title: React.PropTypes.string.isRequired,
    desc: React.PropTypes.string.isRequired
  },
  render: function () {
    return (
      <div className='Header u-background--primary'>
        <div className='header_title'>{this.props.title}</div>
        <div className='header_desc'>{this.props.desc}</div>
      </div>
    )
  }
})

