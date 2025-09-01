import Link from 'next/link';
import { FaPhone, FaEnvelope, FaGlobe, FaGithub, FaPassport } from 'react-icons/fa';
import { jobs, summary } from '@/configs/static-config';

// Helper function to parse description with <span class="highlight-text"> to <strong>
const parseDescription = (text: string) => {
  return text;
  // return text.replace(/<span class="highlight-text">([^<]+)<\/span>/g, '<strong class="text-gray-700 font-semibold">$1</strong>');
};

export default function ResumePage() {
  return (
    <div className="bg-white font-sans min-h-screen print:p-0 print-resume-container">
      <div className="max-w-4xl mx-auto bg-white print:shadow-none print:max-w-full print:m-0">
        {/* Header Section - Compact and print-friendly */}
        <header className="px-8 pt-8 pb-6 print:pt-2 print:pb-2 print:px-4">
          <div className="flex justify-between items-start border-b border-gray-300 pb-4">
            <div>
              <h1 className="text-3xl font-bold text-gray-800">KENJIDING</h1>
              <h2 className="text-xl text-gray-600 mt-1">Senior Full Stack Engineer</h2>
              <p className="text-gray-500 font-bold">7 Years of Experience</p>
            </div>
            <div className="text-right">
              <div className="flex items-center justify-end mb-1">
                <FaPhone className="text-gray-500 mr-2 w-3 h-3" />
                <Link href="tel:+610421259261" className="text-gray-600 hover:text-gray-800 print:hover:text-gray-600">
                  +61 0421259261
                </Link>
              </div>
              <div className="flex items-center justify-end mb-1">
                <FaEnvelope className="text-gray-500 mr-2 w-3 h-3" />
                <Link href="mailto:kenjiding807@gmail.com" className="text-gray-600 hover:text-gray-800 print:hover:text-gray-600">
                  kenjiding807@gmail.com
                </Link>
              </div>
              <div className="flex items-center justify-end mb-1">
                <FaGlobe className="text-gray-500 mr-2 w-3 h-3" />
                <Link href="https://www.kenjiding.com" className="text-gray-600 hover:text-gray-800 print:hover:text-gray-600">
                  www.kenjiding.com
                </Link>
              </div>
              <div className="flex items-center justify-end">
                <FaPassport className="text-gray-500 mr-2 w-3 h-3" />
                <span className="text-gray-600">Work Visa (Expires: 09-2028)</span>
              </div>
            </div>
          </div>
        </header>

        {/* Main Content */}
        <div className="px-8 pb-8 print:px-4 print:pb-4 print:min-h-0">
          {/* Professional Summary */}
          <section className="mb-6">
            <h2 className="text-lg font-bold text-gray-800 uppercase mb-2 border-b border-gray-300 pb-1">Professional Summary</h2>
            <p className="text-gray-700 leading-relaxed text-sm">
              {summary}
            </p>
          </section>

          {/* GitHub Project Highlight */}
          {/* <section className="my-4">
            <div className="flex items-center">
              <FaGithub className="text-gray-700 mr-2" />
              <span className="text-gray-700 font-medium">Open Source Contribution:</span>
              <Link 
                href="https://github.com/kenjiding/job-information-crawler"
                className="text-gray-600 ml-2 hover:text-gray-800 print:hover:text-gray-600"
              >
                100+ star project on GitHub
              </Link>
            </div>
          </section> */}

          {/* Skills Section - More condensed for print */}
          <section className="mb-6 print:mb-3">
            <h2 className="text-lg font-bold text-gray-800 uppercase mb-2 border-b border-gray-300 pb-1">Key Technical Skills</h2>
            
            <div className="grid grid-cols-1 grid-cols-3 gap-4 print:gap-2 text-sm">
              {/* Frontend Skills */}
              <div>
                <h3 className="font-bold text-gray-700 mb-1">Frontend</h3>
                <p className="text-gray-600">JavaScript, TypeScript, React, Vue.js, Next.js, Webpack, Vite, Tailwind CSS, Micro Frontend</p>
              </div>
              
              {/* Backend Skills */}
              <div>
                <h3 className="font-bold text-gray-700 mb-1">Backend</h3>
                <p className="text-gray-600">Node.js, Python, Java, NestJS, Express, tRPC, MySQL, MongoDB, Redis, RabbitMQ</p>
              </div>
              
              {/* DevOps & Other Skills */}
              <div>
                <h3 className="font-bold text-gray-700 mb-1">DevOps & Others</h3>
                <p className="text-gray-600">AWS, Docker, Nginx, GitHub Actions, GitLab, Jenkins, Cypress, Jest, Electron, React Native</p>
              </div>
            </div>
          </section>

          {/* Work Experience */}
          <section className="mb-6 print:mb-3">
            <h2 className="text-lg font-bold text-gray-800 uppercase mb-2 border-b border-gray-300 pb-1">Professional Experience</h2>
            {jobs.map((job) => (
              <div key={job._id} className="mb-5 print:mb-3">
                <div className="flex justify-between items-baseline mb-1">
                  <h3 className="text-xl font-bold text-gray-800">{job.name} - <span className='text-sm font-serif text-gray-700'> ({job.jobTitle})</span></h3>
                  <span className="text-gray-600 text-sm">{`${job.startDate} - ${job.endDate}`}</span>
                </div>
                <p>
                  <span className='mr-2 font-bold text-sm text-[#0284c7]'>Description:</span>
                  <span className="text-gray-700 text-sm font-serif mb-1">{job.projectDesc}</span>
                </p>
                {
                    job.techStack && job.techStack.length > 0 && (
                      <div className="flex flex-wrap gap-2 my-2">
                        <span className='mr-2 font-bold text-sm text-[#0284c7]'>Tech Stack</span>
                        {job.techStack.map((tech: string, index: number) => (
                          <span
                            key={index}
                            className="inline-block px-3 py-1 text-xs font-incognito rounded-md
                              dark:bg-zinc-600 bg-zinc-200 dark:text-zinc-300 text-zinc-700
                              hover:dark:bg-zinc-700 hover:bg-zinc-300 transition-all duration-200
                              hover:scale-105 cursor-default"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    )
                  }
                <ul className="space-y-1 list-disc pl-5 text-sm text-gray-700 print:space-y-0.5">
                  {job.description.map((desc: any, index: number) => (
                    <li key={index} dangerouslySetInnerHTML={{ __html: parseDescription(desc) }} />
                  ))}
                </ul>
              </div>
            ))}
          </section>

          {/* Education and Certifications in a row */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 print:gap-4">
            {/* Education */}
            <section>
              <h2 className="text-lg font-bold text-gray-800 uppercase mb-2 border-b border-gray-300 pb-1">Education</h2>
              <div>
                <h3 className="font-bold text-gray-700">Bachelor&apos;s Degree in Computer Science</h3>
                {/* <p className="text-gray-600">University of Shao Guan</p> */}
                <p className="text-sm text-gray-500">2013 - 2017</p>
              </div>
            </section>

            {/* Certifications/Professional Development */}
            {/* <section>
              <h2 className="text-lg font-bold text-gray-800 uppercase mb-2 border-b border-gray-300 pb-1">Professional Development</h2>
              <ul className="list-disc pl-5 text-sm text-gray-700">
                <li className="mb-1">AWS Certified Developer - Associate</li>
                <li className="mb-1">Agile and Scrum Methodologies Training</li>
                <li className="mb-1">Advanced React Patterns Workshop</li>
                <li>Microservices Architecture Course</li>
              </ul>
            </section> */}
          </div>
        </div>
      </div>
    </div>
  );
}