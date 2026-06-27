import { Helmet } from 'react-helmet-async';

export const Resume = () => {
  const resumeViewUrl = "https://drive.google.com/file/d/13o_vKWFnRPAsCZdm5AaNmbPAZSvQQVmS/preview";

  return (
    <>
      <Helmet>
        <title>Resume — Favour Falola | Software Engineer</title>
        <meta name="description" content="Resume of Favour Falola, software engineer specialising in React, TypeScript, and full-stack web development. Based in Lagos, Nigeria." />
        <meta name="robots" content="noindex" />
      </Helmet>

      
      <div className="w-full h-[calc(100vh-80px)] flex justify-center items-center bg-gray-50 dark:bg-neutral-900 pt-10">
        <iframe
          src={resumeViewUrl}
          className="w-full h-full border-0 md:w-3/4 shadow-lg rounded-lg"
          title="Resume"
        ></iframe>
      </div>
    </>
  );
};
