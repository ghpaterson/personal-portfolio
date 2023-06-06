"use client";

import { useFormik } from "formik";
import * as Yup from "yup";

export default function Contact() {
  // formik logic

  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      message: "",
    },

    //Validate form
    //currently have two form validations

    validationSchema: Yup.object({
      name: Yup.string()
        .max(30, "Name must be 30 Characters or Less")
        .required("Name is Required"),
      email: Yup.string()
        .email("Invalid Email Address")
        .required("Email is Required"),
      message: Yup.string()
        .max(500, "Message must be 500 Characters or less")
        .required("Message is Required"),
    }),

    //submit form
    onSubmit: (values) => {
      console.log(values);
    },
  });

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
          <form
            onSubmit={formik.handleSubmit}
            className="bg-blak w-96 h-full  font-serif py-6 px-10 text-sand"
          >
            <div className="flex justify-center pb-4 text-xl">
              <h2>Contact me for enquiries</h2>
            </div>
            {/* name input field */}
            <div className="">
              <label
                className={`block py-2 ${
                  formik.touched.name && formik.errors.name
                    ? "text-red-600"
                    : ""
                }`}
                htmlFor="name"
              >
                {formik.touched.name && formik.errors.name
                  ? formik.errors.name
                  : "Name"}
              </label>
              <input
                className="p-2 w-full  focus:border-sand rounded-xl text-blak"
                type="text"
                name="name"
                placeholder="Enter Your Name"
                value={formik.values.name}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              />
            </div>
            {/* email input field */}
            <div className="">
              <label
                className={`block py-2 ${
                  formik.touched.email && formik.errors.email
                    ? "text-red-600"
                    : ""
                }`}
                htmlFor="email"
              >
                {formik.touched.email && formik.errors.email
                  ? formik.errors.email
                  : "Email"}
              </label>
              <input
                className="p-2 w-full rounded-xl text-blak"
                type="email"
                name="email"
                placeholder="Enter Your Email"
                value={formik.values.email}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              />
            </div>
            {/* message input field */}
            <div>
              <label
                className={`block py-2 ${
                  formik.touched.message && formik.errors.message
                    ? "text-red-600"
                    : ""
                }`}
                htmlFor="message"
              >
                {formik.touched.message && formik.errors.message
                  ? formik.errors.message
                  : "Message"}
              </label>
              <textarea
                rows={4}
                name="message"
                placeholder="What can I help you with?"
                className="p-2 w-full rounded-xl text-blak"
                value={formik.values.message}
                onChange={formik.handleChange}
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
