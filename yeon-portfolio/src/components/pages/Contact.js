import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';


export default function Contact() {
  const [name, setName] = React.useState("");
  const [message, setMessage] = React.useState("");

  // function encode(data) {
  //   return Object.keys(data)
  //     .map(
  //       (key) => encodeURIComponent(key) + "=" + encodeURIComponent(data[key])
  //     )
  //     .join("&");
  // }

  function handleSubmit(e) {
    e.preventDefault();
    
    window.location.href=`mailto:rogseo@gmail.com?subject=${name}&body=${message}`
    // fetch("/", {
    //   method: "POST",
    //   headers: { "Content-Type": "application/x-www-form-urlencoded" },
    //   body: encode({ "form-name": "contact", name, email, message }),
    // })
    //   .then(() => alert("Message sent!"))
    //   .catch((error) => alert(error));
  }

  return (
    <section id="contact" className="relative">
      <div className="container px-5 py-10 mx-auto flex sm:flex-nowrap flex-wrap">
        <div className="lg:w-2/3 md:w-1/2 bg-gray-900 rounded-lg overflow-hidden sm:mr-10 p-10 flex items-end justify-start relative">
          <iframe
            width="100%"
            height="100%"
            title="map"
            className="absolute inset-0"
            frameBorder={0}
            marginHeight={0}
            marginWidth={0}
            style={{ filter: "opacity(0.7)" }}
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d12690.882482907511!2d-97.63192448377912!3d30.54992587094204!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8644d099f7f54c31%3A0x56b8fef393762857!2s2736%20Santa%20Ana%20Ln%2C%20Round%20Rock%2C%20TX%2078665!5e0!3m2!1sen!2sus!4v1669962888152!5m2!1sen!2sus"
          />
          <div className="bg-gray relative flex flex-wrap py-6 rounded shadow-md">
            <div className="lg:w-1/2 px-6">
              <h2 className="title-font font-semibold text-white tracking-widest text-xs">
                ADDRESS
              </h2>
              <p className="mt-1 text-light-gray">
                2736 Santa Ana Ln <br />
                Round Rock, TX 78665
              </p>
            </div>
            <div className="lg:w-1/2 px-6 mt-4 lg:mt-0">
              <h2 className="title-font font-semibold text-white tracking-widest text-xs">
                EMAIL
              </h2>
              <a className="text-indigo-400 leading-relaxed">
                rogseo@email.com
              </a>
              {/* <h2 className="title-font font-semibold text-white tracking-widest text-xs mt-4">
                PHONE
              </h2>
              <p className="leading-relaxed">123-456-7890</p> */}
            </div>
          </div>
        </div>
        <form
          netlify
          name="contact"
          onSubmit={handleSubmit}
          className="lg:w-1/3 md:w-1/2 flex flex-col md:ml-auto w-full md:py-8 mt-8 md:mt-0">
          <h2 className="text-white sm:text-4xl text-3xl mb-1 font-medium title-font text-light-green">
            Get In touch
          </h2>
          <p className="leading-relaxed mb-5 text-green">
            If you have any question, reach out to me.
          </p>
          <div className="relative mb-4">
            <label htmlFor="name" className="leading-7 text-sm text-white">
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              className="w-full bg-gray-800 rounded border border-gray-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div className="relative mb-4">
            <label
              htmlFor="message"
              className="leading-7 text-sm text-white">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              className="w-full bg-gray-800 rounded border border-gray-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 h-32 text-base outline-none text-gray-100 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
              onChange={(e) => setMessage(e.target.value)}
            />
          </div>
          <button
            type="submit"
            className="text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">
            Submit
          </button>
        </form>
      </div>
    </section>
  );
}


// const Contact = () => {
//   const [status, setStatus] = useState("Submit");

//   function encode(data) {
//     return Object.keys(data)
//       .map(
//         (key) => encodeURIComponent(key) + "=" + encodeURIComponent(data[key])
//       )
//       .join("&");
//   }

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setStatus("Sending...");
//     const { name, email, message } = e.target.elements;
//     let details = {
//       name: name.value,
//       email: email.value,
//       message: message.value,
//     };

//     console.log(name, email, message);




//     // fetch("/", {
//     //   method: "POST",
//     //   headers: { "Content-Type": "application/x-www-form-urlencoded" },
//     //   body: encode({ "form-name": "contact", details.name, email, message }),
//     // })
//     //   .then(() => alert("Message sent!"))
//     //   .catch((error) => alert(error));

//     window.location.href=`mailto:rogseo@gmail.com?subject=${details.name}&body=${details.message}`

//   };
//   return (
//     <Form className="container-lg" onSubmit={handleSubmit}>
//       <Form.Group className="mb-3" controlId="name">
//         <Form.Label>Name</Form.Label>
//         <Form.Control type="text" placeholder="name" />
//       </Form.Group>
//       <Form.Group className="mb-3" controlId="email">
//         <Form.Label>Email address</Form.Label>
//         <Form.Control type="email" placeholder="Enter email" />
//         <Form.Text className="text-muted">
//           Your email address
//         </Form.Text>
//       </Form.Group>
//       <Form.Group className="mb-3" controlId="message">
//         <Form.Label>Text</Form.Label>
//         <Form.Control as="textarea" rows={3} placeholder="text" />

//       </Form.Group>
//       <Button variant="primary" type="submit">
//         Send
//       </Button>
//     </Form>

//   );
// };

// export default Contact;

