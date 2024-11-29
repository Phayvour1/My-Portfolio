

const Resume = () => {
  const resumeUrl = "/resume.pdf"; // Direct path to the PDF in the public folder

  return (
    <div className="bg-gray-100 min-h-screen flex flex-col items-center justify-center">
      {/* Embed the PDF */}
      <iframe
        src={resumeUrl}
        className="w-full h-[800px] max-w-8xl"
        title="Resume"
        frameBorder="0"
      ></iframe>

      {/* Download Button */}
      <a
        href={resumeUrl}
        download
        className="mt-6 px-6 py-3 bg-gray-500 text-white rounded-lg hover:bg-blue-700 transition-all"
      >
        Download Resume
      </a>
    </div>
  );
};

export default Resume;
