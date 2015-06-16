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
            <li><a>Home</a></li>
          </ul>
        </nav>
      </header>
    );
  }
});

module.exports = Header;