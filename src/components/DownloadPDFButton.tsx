"use client";
import { FaDownload } from 'react-icons/fa';
import AnimatedButton from "@/components/animatedButton/AnimatedButton";
import { saveAs } from 'file-saver';

const DownloadPDFButton = () => {
  const handleDownload = async () => {
    try {
      const res = await fetch('/resume.pdf');
      const blob = await res.blob();
      saveAs(blob, 'kenjiding_7_years_Software_Developer.pdf');
    } catch (err) {
      console.error("Download failed", err);
    }
  };

  return (
    <AnimatedButton onClick={handleDownload}>
      <div className="flex items-center justify-center cursor-pointer">
        <FaDownload className="mr-3" />
        <i>Download Resume</i>
      </div>
    </AnimatedButton>
  );
};

export default DownloadPDFButton;
