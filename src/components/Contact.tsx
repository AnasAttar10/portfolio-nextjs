import { FaGithub, FaLinkedin } from "react-icons/fa";
type TContact = {
  contact: {
    email: string;
    linkedin: string;
    github: string;
  };
};
export default function Contact({ contact }: TContact) {
  return (
    <section id="contact" className="py-20 px-6 bg-card text-center">
      <h2 className="text-3xl md:text-4xl font-bold mb-10 text-text">
        Contact Me
      </h2>
      <p className="text-lg text-text mb-6">
        I am always open to opportunities, collaborations, or just a friendly
        chat.
      </p>
      <p className="text-xl text-blue-600 font-semibold">
        <a href="mailto:anas.attar10@gmail.com" className="hover:underline">
          {contact.email}
        </a>
      </p>
      <div className="flex justify-center mt-6 gap-6">
        <a
          href={contact.github}
          target="_blank"
          className="text-text hover:text-black text-2xl"
        >
          <FaGithub size={32} />
        </a>
        <a
          href={contact.linkedin}
          target="_blank"
          className="text-blue-700 hover:text-blue-900 text-2xl"
        >
          <FaLinkedin size={32} />
        </a>
      </div>
    </section>
  );
}
