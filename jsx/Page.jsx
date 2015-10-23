var React = require('react')
var Header = require('./Header.jsx')
var Like = require('./components/Like.jsx')


module.exports = React.createClass({
  'displayName': 'RedMan - Like page',
  render: function () {
    var title = 'Redman Technologies'
    var desc = '10172-108 Street, Edmonton, AB T5J 1L3'
    var header = <Header title={title} desc={desc} />
    return (
    	<div className='Page'>
    		{header}
    		<Like />
      	</div>
    )
  }
});
