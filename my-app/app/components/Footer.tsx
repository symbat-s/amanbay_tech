import Contact from "./Contact";

export default function Footer() {
  return (
    <div className="bg-white">
      <div className="px-8 py-10">
        <h1 className="font-bold text-5xl text-center mb-10" style={{ fontFamily: "Inter" }}>
          Контакты
        </h1>

        <iframe
          src="https://yandex.kz/map-widget/v1/?ll=66.904492%2C48.551793&z=4"
          width="100%"
          height="400"
          style={{ border: 0 }}
          allowFullScreen
        ></iframe>

        <Contact />

        <div className="mt-10 bg-gray-100 p-6 flex flex-col md:flex-row justify-between gap-10">
          <p className="max-w-md">
            If you are looking for a reliable IT partner for digital transformation, process automation or development of modern solutions, contact us. Amanbay Tech is a team of professionals, open to cooperation and ready to offer effective technologies and favorable conditions.
          </p>

          <ul className="space-y-2">
            <li>Home</li>
            <li>Contacts</li>
            <li>About Us</li>
            <li>Terms</li>
          </ul>

          <ul className="space-y-2">
            <li>Privacy Policy</li>
            <li>User Agreement</li>
            <li>Collection and processing of personal data</li>
            <li>Frequently asked questions</li>
          </ul>

          <div>
            <p>Telegram</p>
          </div>
        </div>
      </div>
    </div>
  );
}
