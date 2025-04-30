import Image from "next/image";
import Skills from "./Skills";

export default function About({ about }: { about: string }) {
  return (
    <section
      id="about"
      className="py-20 px-6 text-text text-start md:text-left"
    >
      <div className="max-w-6xl mx-auto md:flex md:items-start md:gap-12">
        <div className="md:w-1/2 flex justify-center md:justify-center mb-10 md:mb-0">
          <div className="relative w-[400px] h-[500px] shadow-lg overflow-hidden rounded-lg">
            <Image
              src="/profile.jpg"
              alt="Anas Attar"
              fill
              className="object-cover"
            />
          </div>
        </div>

        <div className="md:w-1/2 flex flex-col justify-start">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">About Me</h2>
          <p className="text-text text-base md:text-[15px] leading-relaxed mb-8">
            {about}
          </p>
          <a href="Anas_Attar.pdf" title="my cv" download>
            <button className="bg-primary hover:bg-primaryHover border-0 px-5 py-2 w-fit rounded-md cursor-pointer">
              Download CV
            </button>
          </a>
        </div>
      </div>
    </section>
  );
}
