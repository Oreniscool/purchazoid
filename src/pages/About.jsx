import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import promotional from '../assets/promotional_img_1.jpeg';
function About() {
  return (
    <>
      <Navbar></Navbar>
      <div className="h-fit m-24 flex justify-between items-center">
        <div className="flex h-full flex-col w-1/2 justify-center gap-5">
          <h1 className="text-text-300 text-4xl font-semibold">About Us</h1>
          <p className="text-text-50">
            Welcome to Purchazoid, your top destination for a seamless and
            diverse shopping experience. Our mission is to offer high-quality
            products at competitive prices, backed by exceptional customer
            service and fast, secure shipping. Founded on principles of
            innovation and customer satisfaction, we ensure every purchase meets
            our high standards. Our dedicated team is here to assist you, making
            shopping convenient and enjoyable. Thank you for choosing Purchazoid
            - we look forward to serving you!
          </p>
        </div>
        <img className="w-1/3 object-contain" src={promotional} alt="hi" />
      </div>
      <Footer></Footer>
    </>
  );
}
export default About;
