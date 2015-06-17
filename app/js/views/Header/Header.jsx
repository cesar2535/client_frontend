var Header = React.createClass({
  displayName: 'Header',
  componentDidMount: function () {
    console.info('Header Did Mount');
  },
  render: function () {
    return (
      <header>
        <nav>
          <ul>
          </ul>
        </nav>
      </header>
    );
  }
});

module.exports = Header;