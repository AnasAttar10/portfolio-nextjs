import { FaCheckCircle } from "react-icons/fa";

type TSkills = {
  skills: string[];
};
export default function Skills({ skills }: TSkills) {
  return (
    <section id="skills" className="py-20 px-6 text-text text-center">
      <h2 className="text-3xl md:text-4xl  font-bold mb-10">Skills</h2>
      <div className="max-w-4xl mx-auto grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 text-gray-700 text-lg font-medium">
        {skills.map((skill, index) => (
          <div
            key={index}
            className="bg-card hover:bg-primary duration-500 text-text rounded-xl shadow hover:shadow-md transition p-4"
          >
            <FaCheckCircle className="text-primary" />
            <span>{skill}</span>
          </div>
        ))}
      </div>
    </section>
  );
}
