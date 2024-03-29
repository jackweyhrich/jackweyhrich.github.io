// import PropTypes from "prop-types";

interface Props {
  name: string
}
function Home({name}: Props): JSX.Element {
  return <h1 className="font-bold underline">Hello, {name}</h1>;
}


export default Home;
