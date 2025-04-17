"use client";
import { FaDownload } from 'react-icons/fa';
import AnimatedButton from "@/components/animatedButton/AnimatedButton";

const DownloadPDFButton = () => {
  const handleDownload = () => {
    const link = document.createElement('a');
    link.href = '/resume.pdf';
    link.download = 'kenjiding _7 years Software Developer.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <AnimatedButton
      onClick={handleDownload}
    >
      <div className="flex items-center justify-center">
        <FaDownload className="mr-3" />
        <i>Download Resume</i>
      </div>
    </AnimatedButton>
  );
};

export default DownloadPDFButton;