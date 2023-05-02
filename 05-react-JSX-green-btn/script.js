const App = ({ initialButtonText, initialClassName }) => {
  const [buttonText, setBtnText] = React.useState(initialButtonText);
  const [classesList, setClassesList] = React.useState(initialClassName);

  const onButtonClick = () => {
    setBtnText('Hello');
    setClassesList('green-btn');
  };

  return (
    <div className="app">
      <button className={classesList} onClick={onButtonClick}>
        {buttonText}
      </button>
    </div>
  );
};
const container = document.querySelector('#app');
const root = ReactDOM.createRoot(container);
root.render(<App initialButtonText="Click me" initialClassName="" />);
