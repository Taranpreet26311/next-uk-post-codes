import axios from "axios";

const Homepage = ({ data }) => {
    return <h1>{data.country} - {data.postcode}</h1>;
}

export default Homepage;

//This function is called on the server when the user requests this page
export async function getServerSideProps() {
    // Fetch data from the external API
    const res = await axios.get(`http://api.postcodes.io/random/postcodes`)
    const data = res.data.result;
    console.log('Server running in ECS');

    // Pass the data to the page via props
    return { props: { data } }
}
