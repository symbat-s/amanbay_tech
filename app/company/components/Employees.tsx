import Employees from '@/data/Employee.json';

export default function Employee() {
  return (
    <section className="px-10 py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto grid gap-8 md:grid-cols-3">
        {Employees.map((employee, index) => (
          <div
            key={index}
            className="bg-white border border-gray-200 rounded-3xl shadow-lg p-6 flex flex-col"
          >
            <div className="items-center  mb-4">
              <img
                src={employee.image.src}
                alt={employee.image.alt}
                width={employee.image.width}
                height={employee.image.height}
              />
              <div>
                <h2 className="text-lg mt-3 font-bold">{employee.title.main}</h2>
              </div>
            </div>

            <p className="text-sm text-gray-700 mb-5">{employee.description}</p>

            <div className="flex flex-wrap gap-2 mt-auto">
              {employee.skills.map((skill, idx) => (
                <span
                  key={idx}
                  className="px-3 py-1 bg-[#717271] text-white rounded-full text-xs font-medium"
                >
                  {skill.name}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}