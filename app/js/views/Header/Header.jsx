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
            <li><a href="./">Home</a></li>
            <li><a href="./streaming/asdsadsa">Streaming</a></li>
          </ul>
        </nav>
      </header>
    );
  }
});

module.exports = Header;