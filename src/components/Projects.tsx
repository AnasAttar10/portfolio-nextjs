import Image from "next/image";

type TProject = {
  projects: {
    title: string;
    description: string;
    link: string;
    github: string;
    image: string;
  }[];
  github: string;
};
export default function Projects({ projects, github }: TProject) {
  return (
    <section id="projects" className="py-20 px-6  text-center">
      <h2 className=" text-text text-3xl md:text-4xl font-bold mb-10">
        Projects
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
        {projects.map((project, index) => (
          <div
            key={index}
            className="bg-card rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition"
          >
            <div className="relative h-64 w-full">
              <Image
                src={project.image}
                alt={project.title}
                fill
                className="object-cover"
              />
            </div>
            <div className="p-6 text-left">
              <h3 className="text-text text-xl font-semibold mb-2">
                {project.title}
              </h3>
              <p className="text-text mb-4">{project.description}</p>
              <div className="flex gap-4">
                <a
                  href={project.link}
                  target="_blank"
                  className="text-blue-600 hover:underline"
                >
                  Live
                </a>
                <a
                  href={project.github}
                  target="_blank"
                  className="text-emerald-600 hover:underline"
                >
                  Code
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
      <a href={github}>
        <button className="bg-primary text-text hover:bg-primaryHover cursor-pointer border-0 px-8 py-2 w-fit rounded-md mt-20">
          See More
        </button>
      </a>
    </section>
  );
}
