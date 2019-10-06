h1 = React.createElement('h1',null, 'esto es texo de h1');
p1 = React.createElement('p',null, 'esto es texo de paragraph. In script Text, to avoid "Target container is not a DOM element" DOM element be defined before this script');
ReactDOM.render(
  React.createElement('div', null, h1, p1),
  document.getElementById('in_script')
)
