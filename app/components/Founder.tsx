import data from "@/data/founder.json";

export default function Founder() {
  const { name, title, description, photo } = data.founder;

  return (
    <div className="flex gap-45 px-20 mt-[100px]">
      <div className="w-1/2 tracking-wide">
        <h1 className="font-bold text-3xl pb-5">{name}</h1>
        <p className="text-xl font-semibold pb-5">{title}</p>
        {description.map((text, index) => (
          <p key={index} className="text-xl">{text}</p>
        ))}
      </div>
      <img src={photo} className="h-[600px]" alt={name} />
    </div>
  );
}
