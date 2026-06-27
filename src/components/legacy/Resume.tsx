


const Resume = () => {
  const resumeViewUrl = "https://drive.google.com/file/d/13o_vKWFnRPAsCZdm5AaNmbPAZSvQQVmS/preview"; // Viewable Google Drive link
  
  

 

  return (
    <div className="bg-gray-100 min-h-screen flex flex-col items-center justify-center relative">
     

      {/* PDF Viewer */}
      <div className="w-full  h-screen">
        <iframe
          src={resumeViewUrl}
          className="w-[95%] h-[90%]  border-0 "
          title="Resume"
        ></iframe>
      </div>

    </div>
  );
};

export default Resume;
