import Link from 'next/link';
import { FaPhone, FaEnvelope, FaGlobe, FaGithub, FaPassport } from 'react-icons/fa'; // 新增 FaPassport
import { jobs } from '@/configs/static-config';

// Helper function to parse description with <span class="highlight-text"> to <strong>
const parseDescription = (text: string) => {
  return text.replace(/<span class="highlight-text">([^<]+)<\/span>/g, '<strong class="text-sky-600 font-semibold">$1</strong>');
};

export default function ResumePage() {
  return (
    <div className="bg-gray-50 font-sans min-h-screen print-container">
      <div className="max-w-7xl m-auto bg-white overflow-hidden">
        {/* Main Content Container */}
        <div className="flex flex-row">
          {/* Left Sidebar */}
          <div className="w-[300px] bg-slate-700 text-white p-8 print-sidebar">
            {/* Profile Section */}
            <div className="text-center mb-8">
              <div className="w-32 h-32 rounded-full bg-sky-400 mx-auto mb-4 flex items-center justify-center">
                <span className="text-4xl font-bold text-white">KD</span>
              </div>
              <h1 className="text-2xl font-semibold">Kenjiding</h1>
              <h2 className="text-sky-300 mt-1">Senior Full Stack Engineer</h2>
              <p className="mt-2 text-gray-300">7 Years of Experience</p>
            </div>

            {/* Contact Information */}
            <div className="mb-8">
              <h3 className="text-lg font-semibold uppercase tracking-wider mb-4 pb-2 border-b border-sky-400">Contact</h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <FaPassport className="text-sky-300 mt-1 mr-3 w-5" />
                  <span className="text-sky-200">Work Visa, Expiry: 09-2028</span>
                </li>
                <li className="flex items-start">
                  <FaPhone className="text-sky-300 mt-1 mr-3 w-5" />
                  <Link href="tel:+610421259261" className="text-sky-200 hover:text-white transition">
                    +61 0421259261
                  </Link>
                </li>
                <li className="flex items-start">
                  <FaEnvelope className="text-sky-300 mt-1 mr-3 w-5" />
                  <Link href="mailto:kenjiding807@gmail.com" className="text-sky-200 hover:text-white transition">
                    kenjiding807@gmail.com
                  </Link>
                </li>
                <li className="flex items-start">
                  <FaGlobe className="text-sky-300 mt-1 mr-3 w-5" />
                  <Link href="https://www.kenjiding.com" target="_blank" className="text-sky-200 hover:text-white transition">
                    kenjiding.com
                  </Link>
                </li>
                <li className="flex items-start">
                  <FaGithub className="text-sky-300 mt-1 mr-3 w-5" />
                  <Link
                    href="https://github.com/kenjiding/job-information-crawler"
                    target="_blank"
                    className="text-sky-200 hover:text-white transition"
                  >
                    100+ star open-source project
                  </Link>
                </li>
              </ul>
            </div>

            {/* Education */}
            <div className="mb-8">
              <h3 className="text-lg font-semibold uppercase tracking-wider mb-4 pb-2 border-b border-sky-400">Education</h3>
              <div className="mb-4">
                <h4 className="font-medium">University of Shao Guan</h4>
                <p className="text-gray-300">Bachelors Degree</p>
                <p className="text-sm text-gray-400">2013/09 - 2017/09</p>
              </div>
            </div>

            {/* Skills */}
            <div>
              <h3 className="text-lg font-semibold uppercase tracking-wider mb-4 pb-2 border-b border-sky-400">Technical Skills</h3>
              <div className="mb-4">
                <h4 className="font-medium text-sky-300 mb-2">Frontend</h4>
                <div className="flex flex-wrap gap-2">
                  {['JavaScript', 'TypeScript', 'React', 'Vue', 'Nextjs', 'Webpack', 'Vite', 'Tailwind', 'Micro Frontend'].map(
                    (skill) => (
                      <span key={skill}>{skill}</span>
                    )
                  )}
                </div>
              </div>
              <div className="mb-4">
                <h4 className="font-medium text-sky-300 mb-2">Backend</h4>
                <div className="flex flex-wrap gap-2">
                  {['Nodejs', 'JAVA', 'Nestjs', 'Koa', 'Express', 'Trpc', 'RabbitMQ', 'MySQL', 'MongoDB', 'Redis'].map((skill) => (
                    <span key={skill}>{skill}</span>
                  ))}
                </div>
              </div>
              <div>
                <h4 className="font-medium text-sky-300 mb-2">DevOps & Others</h4>
                <div className="flex flex-wrap gap-2">
                  {['AWS', 'Git Action', 'GitLab', 'Jenkins', 'Docker', 'Nginx', 'Cypress', 'Jest', 'Electron', 'React Native'].map(
                    (skill) => (
                      <span key={skill}>{skill}</span>
                    )
                  )}
                </div>
              </div>
            </div>
          </div>

          {/* Right Main Content */}
          <div className="flex-1 p-8 print-content">
            {/* Summary */}
            <section className="mb-8">
              <h2 className="text-2xl font-bold text-slate-700 mb-4 pb-2 border-b border-gray-200">Professional Summary</h2>
              <p className="text-gray-700 leading-relaxed">
                Experienced Senior Web Frontend Engineer with a 7-year track record in developing innovative web solutions. Familiar
                with developing for various platforms, including desktop, mobile, and web. Skilled in full-stack development,
                microservices, and cloud technologies. Passionate about exploring new technologies, improving code quality and
                adopting agile methodologies.
              </p>
            </section>

            {/* Work Experience */}
            <section>
              <h2 className="text-2xl font-bold text-slate-700 mb-6 pb-2 border-b border-gray-200">Work Experience</h2>
              {jobs.map((job) => (
                <div key={job._id} className="mb-8">
                  <div className="flex flex-col sm:flex-row justify-between mb-2">
                    <h3 className="text-xl font-semibold text-slate-700">{job.name}</h3>
                    <span className="text-gray-600 italic">{`${job.startDate} - ${job.endDate}`}</span>
                  </div>
                  <h4 className="text-sky-600 font-medium mb-3">{job.jobTitle}</h4>
                  {job.summary && <p className="text-gray-700 mb-3">{job.summary}</p>}
                  <ul className="space-y-3 list-disc pl-5 text-gray-700">
                    {job.description.map((desc: string, index: number) => (
                      <li key={index} dangerouslySetInnerHTML={{ __html: parseDescription(desc) }} />
                    ))}
                  </ul>
                </div>
              ))}
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}