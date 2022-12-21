// import PropTypes from "prop-types";

interface Props {
  name: string
}
function Home({name}: Props): JSX.Element {
  return <h1>Hello, {name}</h1>;
}


export default Home;
