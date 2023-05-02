function Wrapper(props) {
  const style = {
    width: '250px',
    padding: '20px',
    margin: '20px auto',
    backgroundColor: props.color,
  };
  return <div style={style}>{props.children}</div>;
}

export default Wrapper;
