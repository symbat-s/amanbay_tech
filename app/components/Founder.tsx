import data from "@/data/Founder.json";

export default function Founder() {
  const { name, title, description, photo } = data.founder;

  return (
    <div className="md:flex block md:gap-45 px-20 mt-[100px]">
      <div className="md:w-1/2 md:tracking-wide">
        <h1 className="font-bold text-xl md:text-3xl pb-5">{name}</h1>
        <p className="md:text-xl text-sm font-semibold pb-5">{title}</p>
        {description.map((text, index) => (
          <p key={index} className="md:text-xl text-sm">{text}</p>
        ))}
      </div>
      <img src={photo} className="md:h-[600px] mt-5" alt={name} />
    </div>
  );
}
