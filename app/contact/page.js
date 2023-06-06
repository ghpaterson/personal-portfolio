import Link from "next/link";

export default function Contact() {
  return (
    <main className="lg:w-full lg:h-screen flex ">
      <section className="w-1/2 h-screen bg-sand">
        <div className="flex flex-col items-center py-12 ">
          <div className="text-4xl font-mirage">
            <h1>Contact Me</h1>
          </div>
        </div>
        {/* contact form */}
        <div className="flex items-center justify-center ">
          <form className="bg-blak w-96 h-full  font-serif py-6 px-10 text-sand">
            <div className="flex justify-center pb-4 text-xl">
              <h2>Contact me for enquiries</h2>
            </div>
            {/* name input field */}
            <div className="">
              <label className="block py-2" htmlFor="name">
                Name
              </label>
              <input
                className="p-2 w-full  focus:border-sand"
                required
                minLength={3}
                maxLength={30}
                type="text"
                name="name"
                placeholder="Enter Name"
              />
            </div>
            {/* email input field */}
            <div className="">
              <label className="block py-2" htmlFor="email">
                Email
              </label>
              <input
                className="p-2 w-full focus:border-sand"
                required
                minLength={6}
                maxLength={50}
                type="email"
                name="email"
                placeholder="Enter Email"
              />
            </div>
            {/* message input field */}
            <div>
              <label className="block py-2" htmlFor="message">
                Message
              </label>
              <textarea
                required
                minLength={10}
                maxLength={500}
                rows={4}
                name="message"
                placeholder="What can I help you with?"
                className="p-2 w-full"
              />
            </div>
            {/* submit button */}
            <div className="py-2">
              <button
                type="submit"
                className="bg-sand text-blak px-4 py-2 rounded-full"
              >
                Send Message
              </button>
            </div>
          </form>
        </div>
      </section>
      <section className="w-1/2 h-screen bg-contact-image bg-cover "></section>
    </main>
  );
}
