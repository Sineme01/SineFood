import contact_img from "../assets/img/contact_2.png"
const Contact = () => {
    return (
      <>
        <div className="flex">
          {/* <h1>Trin Trin Trin ....  This is a Contact Page.</h1> */}
          <img src={contact_img} className="ml-36  w-[500] h-[500]"></img>
          <h1 className="text-black text-4xl font-bold ml-96 mt-16">Contact Us</h1>
        </div>
      </>
    );
  };
  export default Contact;
  
