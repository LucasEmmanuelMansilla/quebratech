export default function Footer() {
  return (
    <footer className="bg-primary-darker text-white py-6 md:py-8 text-center">
      <div className="container mx-auto">
        <div className="mb-4 text-lg">
          Contacto:{" "}
          <a href="mailto:info@quebratech.com.ar" className="hover:text-gray-400">
            info@quebratech.com.ar
          </a>
        </div>
        <div className="social-links">
          <a target="_blank" href="https://www.instagram.com/quebra_tech/" className="mx-2 hover:text-gray-400">
            Instagram
          </a>
          <a target="_blank" href="https://www.linkedin.com/company/quebratech" className="mx-2 hover:text-gray-400">
            LinkedIn
          </a>
        </div>
      </div>
    </footer>
  );
}
