
import teamMembers from '../Data/teamMembers'; 

const TeamSection = () => {
  return (
    <div className="w-full py-12 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold">Meet our Core Team</h1>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {teamMembers.map((member, index) => (
            <div 
              key={index} 
              className="bg-white p-8 rounded-lg shadow-md hover:bg-gray-100 transition duration-300"
            >
              <div className="flex flex-col items-center">
                <img 
                  src={member.image} 
                  alt={member.name} 
                  className="w-48 h-48 rounded-full object-cover mb-6" 
                />
                <h3 className="text-2xl font-semibold text-gray-800 mb-2">{member.name}</h3>
                <h4 className="text-lg text-gray-600 mb-4">{member.role}</h4>
                <div className="flex space-x-6 mt-4">
                  <a 
                    href={member.linkedin} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="text-gray-500 hover:text-gray-700" 
                    aria-label={`${member.name} LinkedIn`}
                  >
                    <i className="fab fa-linkedin fa-2x"></i>
                  </a>
                  <a 
                    href={member.github} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="text-gray-500 hover:text-gray-700" 
                    aria-label={`${member.name} GitHub`}
                  >
                    <i className="fab fa-github fa-2x"></i>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TeamSection;
