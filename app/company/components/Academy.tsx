import Academy from '@/data/Academy.json';

export default function AcademyPage() {
  return (
    <div className="md:flex block">
      {Academy.map((item, index) => (
        <div key={index} className="md:w-1/2">
          <h1 className="md:font-bold font-semibold md:text-5xl text-2xl md:p-10 p-5">
            {item.title}
          </h1>
          <p className="font-medium p-5 text-sm md:text-xl md:p-10">
            {item.text}
          </p>
        </div>
      ))}
    </div>
  );
}
