"use client";
import { useState } from "react";
import { toast } from "sonner";

export const ContactForm = () => {
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("handleSubmit clicked");

    const { name, email, message } = formData;

    if (!name || !email || !message) {
      toast.error("Please fill all the fields");
      return;
    }

    // call your API here to submit the form
    // here's a mock API call

    const response = await new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve("API call successful!");
      }, 1000);
    });

    if (response) {
      toast.success("Form submitted successfully!");
    } else {
      toast.error("Something went wrong");
    }
  };

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="shadow-section-inset my-6 border-y border-neutral-100 py-12"
    >
      <div className="mx-auto flex w-full max-w-lg flex-col gap-5">
        <div className="flex flex-col gap-2">
          <label
            htmlFor="name"
            className="text-sm font-medium tracking-tight text-neutral-600"
          >
            Full name
          </label>
          <input
            id="name"
            name="name"
            onChange={handleChange}
            type="text"
            placeholder="Gaurav Shukla"
            className="shadow-aceternity focus:ring-primary rounded-md p-2 py-1 text-sm focus:ring-2 focus:outline-none"
          />
        </div>
        <div className="flex flex-col gap-2">
          <label
            htmlFor="email"
            className="text-sm font-medium tracking-tight text-neutral-600"
          >
            Email Address
          </label>
          <input
            id="email"
            name="email"
            onChange={handleChange}
            type="email"
            placeholder="user@example.com"
            className="shadow-aceternity focus:ring-primary rounded-md p-2 py-1 text-sm focus:ring-2 focus:outline-none"
          />
        </div>
        <div className="flex flex-col gap-2">
          <label
            htmlFor="message"
            className="text-sm font-medium tracking-tight text-neutral-600"
          >
            Message
          </label>
          <textarea
            rows={5}
            id="message"
            name="message"
            onChange={handleChange}
            placeholder="Hi Gaurav, I would like to..."
            className="shadow-aceternity focus:ring-primary resize-none rounded-md p-2 py-1 text-sm focus:ring-2 focus:outline-none"
          />
        </div>
        <button
          type="submit"
          className="bg-primary rounded-md px-4 py-2 text-white"
        >
          Send message
        </button>
      </div>
    </form>
  );
};
