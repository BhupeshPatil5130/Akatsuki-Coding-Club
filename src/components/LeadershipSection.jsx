
import leaders from '../Data/leaders'; // Adjust the path as needed

const LeadershipSection = () => {
  return (
    <div className="w-full py-12 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 m-5">
          <h1 className="text-5xl font-bold mb-2 p-8">Meet the New President and Vice President</h1>
          <p className="text-2xl text-gray-600 p-3">Leadership unveiled</p>
        </div>
        <div className="flex flex-wrap justify-center gap-6">
          {leaders.map((leader, index) => (
            <div 
              key={index} 
              className="w-full max-w-md p-8 rounded-lg shadow-md hover:shadow-lg hover:bg-gray-300 transition duration-300 transform hover:scale-105 flex flex-col items-center text-center"
            >
              <div className="w-full mb-6 flex justify-center">
                <img 
                  src={leader.image} 
                  alt={`${leader.name} profile`} 
                  className="w-48 h-48 object-cover rounded-full" 
                />
              </div>
              <div className="text-center">
                <h3 className="text-2xl font-semibold text-gray-800 mb-2">{leader.name}</h3>
                <h4 className="text-xl text-gray-600 mb-4">{leader.role}</h4>
                <div className="flex space-x-6 justify-center">
                  {leader.linkedin && (
                    <a 
                      href={leader.linkedin} 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="text-gray-500 hover:text-gray-700"
                      aria-label={`${leader.name} LinkedIn`}
                    >
                      <i className="fab fa-linkedin fa-3x"></i>
                    </a>
                  )}
                  {leader.github && (
                    <a 
                      href={leader.github} 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="text-gray-500 hover:text-gray-700"
                      aria-label={`${leader.name} GitHub`}
                    >
                      <i className="fab fa-github fa-3x"></i>
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default LeadershipSection;
