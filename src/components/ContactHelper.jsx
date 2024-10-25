"use client";

import { Field, Switch } from "@headlessui/react";
import { useState } from "react";

// const handleSubmit = async (event) => {
//   event.preventDefault();

//   const formData = new FormData(event.target);
//   const { email, message, name } = Object.fromEntries(formData.entries());

//   try {
//     const response = await fetch("/api/sendEmail.json", {
//       method: "POST",
//       headers: {
//         "Content-Type": "application/json",
//       },
//       body: JSON.stringify({
//         from: "andrei@riverwalk.dev",
//         to: "william@riverwalk.dev",
//         reply_to: email,
//         subject: `New message from ${name}`,
//         html: `<p>${message}</p>`,
//         text: message,
//       }),
//     });

//     if (!response.ok) {
//       throw new Error("Network response was not ok");
//     }

//     const result = await response.json();
//     console.log("Success:", result);
//   } catch (error) {
//     console.error("Error:", error);
//   }
// };

export default function Example() {
  const [agreed, setAgreed] = useState(false);

  return (
    <div className="card-shadow-color card-shadow isolate my-16 rounded-3xl bg-secondary px-6 py-8 sm:py-12 lg:mx-32">
      <div className="mx-auto max-w-xl text-center">
        <h2 className="text-3xl font-bold tracking-tight text-content sm:text-4xl">
          Need a course or training session?
        </h2>
        <p className="mt-2 text-lg leading-8 text-content">
          Send me a message and let's talk about your needs.
        </p>
      </div>
      <form
        action="https://api.web3forms.com/submit"
        method="POST"
        className="mx-auto max-w-xl"
      >
        <input
          type="hidden"
          name="access_key"
          value="16c01467-967d-411c-a15c-e5e9e4a936f3"
        />
        <input
          type="hidden"
          name="subject"
          value="New Contact Submission - Rock The JVM"
        />
        <input
          type="checkbox"
          name="botcheck"
          className="hidden"
          style={{ display: "none" }}
        />
        <input type="hidden" name="from_name" value="Rock The JVM" />
        <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
          <div className="sm:col-span-2">
            <label
              htmlFor="name"
              className="block text-sm font-semibold leading-6 text-content"
            >
              Name
            </label>
            <div className="mt-2.5">
              <input
                id="name"
                name="name"
                type="text"
                autoComplete="given-name"
                required
                className="block w-full rounded-md border-0 px-3.5 py-2 text-black shadow-sm ring-1 ring-inset ring-content-2 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-cta sm:text-sm sm:leading-6"
              />
            </div>
          </div>
          <div className="sm:col-span-2">
            <label
              htmlFor="email"
              className="block text-sm font-semibold leading-6 text-content"
            >
              Email
            </label>
            <div className="mt-2.5">
              <input
                id="email"
                name="email"
                type="email"
                autoComplete="email"
                required
                className="block w-full rounded-md border-0 px-3.5 py-2 text-black shadow-sm ring-1 ring-inset ring-content-2 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-cta sm:text-sm sm:leading-6"
              />
            </div>
          </div>
          <div className="sm:col-span-2">
            <label
              htmlFor="message"
              className="block text-sm font-semibold leading-6 text-content"
            >
              Message
            </label>
            <div className="mt-2.5">
              <textarea
                id="message"
                name="message"
                rows={4}
                required
                className="block w-full rounded-md border-0 px-3.5 py-2 text-black shadow-sm ring-1 ring-inset ring-content-2 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-cta sm:text-sm sm:leading-6"
                defaultValue={""}
              />
            </div>
          </div>
          <Field className="flex gap-x-4 sm:col-span-2">
            <div className="flex h-6 items-center">
              <Switch
                checked={agreed}
                onChange={setAgreed}
                className="group flex w-8 flex-none cursor-pointer rounded-full bg-gray-200 p-px ring-1 ring-inset ring-content-2 transition-colors duration-200 ease-in-out focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent-1 data-[checked]:bg-accent-1"
              >
                <span className="sr-only">Agree to policies</span>
                <span
                  aria-hidden="true"
                  className="size-4 rounded-full bg-white shadow-sm ring-1 ring-content-2 transition duration-200 ease-in-out group-data-[checked]:translate-x-3.5"
                />
              </Switch>
            </div>
            <div className="text-sm leading-6 text-content">
              By selecting this, you agree to our{" "}
              <a href="/legal/privacy">privacy policy</a>.
            </div>
          </Field>
        </div>
        <div className="mt-10">
          <button
            type="submit"
            disabled={!agreed}
            className={`${agreed ? "bg-cta text-ctatext hover:bg-accent-1 hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600" : "text-content-1 ring-1 ring-cta"} block w-full rounded-md px-3.5 py-2.5 text-center text-sm font-semibold shadow-sm`}
          >
            Let's talk
          </button>
        </div>
      </form>
    </div>
  );
}
