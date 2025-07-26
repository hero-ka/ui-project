import Layout from "../Layout";
import Header from "../homepage/header.jsx";
import HeaderBottom from "../homepage/Headerbottom.jsx";
import NewArrivals from "../homepage/NewArrivals.jsx";
import Topselling from "../homepage/TopSelling.jsx";
import Photo from "../homepage/photo.jsx";
import Comment from "../homepage/comment.jsx";

function Home() {
  return (
    <Layout>
      <Header topOffset={90} />
      <HeaderBottom />
      <NewArrivals />
      <Topselling />
      <Photo />
      <Comment />
      
      </Layout>
  );
}

export default Home;