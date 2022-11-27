function Home(props) {
  return <h1>Hello, {props.name}</h1>;
}
Home.propTypes = {
  name: PropTypes.string,
};

export default Home;
