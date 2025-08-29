export default function ServicesGrid() {
  return (
    <div className="max-w-6xl mx-auto px-6 py-12">
      {/* Первая секция - Здравоохранение */}
      <div className="mb-16">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8">
          Здравоохранение
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          {[
            { title: "EHERJAR", description: "" },
            { title: "Telehealth", description: "" },
            { title: "AI Diagnostics", description: "" },
            { title: "Appointment Systems", description: "" },
            { title: "ePrescription", description: "" },
            { title: "HL7 FHR Integration", description: "" }
          ].map((item, index) => (
            <div key={index} className="p-6 bg-white rounded-lg border border-gray-200">
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                {item.title}
              </h3>
              {item.description && (
                <p className="text-gray-600 text-sm">
                  {item.description}
                </p>
              )}
            </div>
          ))}
        </div>

        <div className="w-full h-px bg-gray-300 my-12"></div>
      </div>

      {/* Вторая секция - Образование и e-learning */}
      <div className="mb-16">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8">
          Образование и e-learning
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            { 
              title: "Learning Management Systems", 
              description: "Mobile Applications" 
            },
            { 
              title: "AI Tutors", 
              description: "" 
            }
          ].map((item, index) => (
            <div key={index} className="p-6 bg-white rounded-lg border border-gray-200">
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                {item.title}
              </h3>
              {item.description && (
                <p className="text-gray-600 text-sm">
                  {item.description}
                </p>
              )}
            </div>
          ))}
        </div>

        <div className="w-full h-px bg-gray-300 my-12"></div>
      </div>

      {/* Третья секция - Туризм и путешествия */}
      <div>
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8">
          Туризм и путешествия
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            { title: "AR/VR Solutions", description: "" },
            { title: "Ticket Booking Systems", description: "" },
            { title: "Mobile Guides", description: "" }
          ].map((item, index) => (
            <div key={index} className="p-6 bg-white rounded-lg border border-gray-200">
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                {item.title}
              </h3>
              {item.description && (
                <p className="text-gray-600 text-sm">
                  {item.description}
                </p>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}