
import { useNavigate } from "react-router-dom";

const Resume = () => {
  const navigate = useNavigate();
  const resumeViewUrl = "https://drive.google.com/file/d/13o_vKWFnRPAsCZdm5AaNmbPAZSvQQVmS/preview"; // Viewable Google Drive link
  const resumeDownloadUrl = "https://drive.google.com/uc?export=download&id=13o_vKWFnRPAsCZdm5AaNmbPAZSvQQVmS"; // Direct download link

  // Navigate to the homepage
  const goToHome = () => {
    navigate("/"); // Go back to the homepage
  };

 

  return (
    <div className="bg-gray-100 min-h-screen flex flex-col items-center justify-center relative">
      {/* Home Button */}
      <button
        onClick={goToHome}
        className="absolute top-4 left-4 px-6 py-3 bg-gray-500 text-white rounded-lg hover:bg-gray-400 transition-all"
      >
        Home
      </button>

      {/* PDF Viewer */}
      <div className="w-full  h-screen">
        <iframe
          src={resumeViewUrl}
          className="w-full h-full  border-0 "
          title="Resume"
        ></iframe>
      </div>

      {/* Download Button */}
      <a
        href={resumeDownloadUrl}
        download
        className=" absolute bottom-7 right-4 transform -translate-x-1/2 px-2 py-1 bg-gray-500 text-white rounded-lg hover:bg-gray-900 transition-all"
      >
        Download 
      </a>
    </div>
  );
};

export default Resume;
