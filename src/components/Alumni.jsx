/* eslint-disable react/no-unescaped-entities */
import { alumniData } from "../Data/alumniData";

const Alumni = () => {
  return (
    <section id="team" className="bg-gray-100 py-12">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">ALUMNI SUCCESS 🎉</h2>
          <p className="text-gray-600 text-lg">
            "Journey from Akatsuki to Corporate Cosmos"
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {alumniData.map((member) => (
            <div
              key={member.name}
              className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <div className="flex justify-center mb-4">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-32 h-32 object-cover rounded-full border-2 border-gray-200"
                />
              </div>
              <div className="text-center">
                <h3 className="text-xl font-semibold mb-2">{member.name}</h3>
                <h4 className="text-lg text-gray-600 mb-4">{member.role}</h4>
                {member.company.map((comp, index) => (
                  <p key={index} className="text-gray-500 mb-1">
                    {comp}
                  </p>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Alumni;
