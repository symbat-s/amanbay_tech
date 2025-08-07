import Contact from "./Contact";

export default function Question(){
  return (
    <div className="bg-white">
      <div>
        <h1 className="font-bold text-5xl text-center mb-10" style={{ fontFamily: "Inter" }}>
          Contact
        </h1>
        <iframe
          src="https://yandex.kz/map-widget/v1/?ll=66.904492%2C48.551793&z=4"
          width="100%"
          height="400"
          style={{ border: 0 }}
          allowFullScreen
        ></iframe>
        <Contact/>
        
      </div>
    </div>
  );
}
