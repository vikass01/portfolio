"use client";
import "./resume.css";
// import photo from '../media/profile_photo.jpeg'
import React, { useRef } from 'react';
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';

const Resume = () => {
  const contentRef = useRef();

  const generatePdf = async () => {
    const input = contentRef.current;

    const canvas = await html2canvas(input, {
      scale: 2,
      useCORS: true,
    });

    const imgData = canvas.toDataURL('image/png');

    const pdf = new jsPDF('p', 'pt', 'a4'); // 'pt' = points (1/72 inch)
    const pdfWidth = pdf.internal.pageSize.getWidth();
    const pdfHeight = pdf.internal.pageSize.getHeight();

    const imgWidth = canvas.width;
    const imgHeight = canvas.height;
    const ratio = pdfWidth / imgWidth;
    const scaledHeight = imgHeight * ratio;

    let position = 0;

    // Add first page
    pdf.addImage(imgData, 'PNG', 0, position, pdfWidth, scaledHeight);
    position -= pdfHeight;

    // Add extra pages if needed
    while (scaledHeight + position > 0) {
      pdf.addPage();
      pdf.addImage(imgData, 'PNG', 0, position, pdfWidth, scaledHeight);
      position -= pdfHeight;
    }

    pdf.save('download.pdf');
  };

  return (
    <div style={{width:800, display: 'flex', flexDirection: 'column-reverse', backgroundColor:'#fff' }}>
      <button onClick={generatePdf} style={{ cursor: 'pointer', padding: '10px 20px', backgroundColor: '#1a8ea1', color: '#fff', border: 'none', borderRadius: '5px', marginBottom: '20px', alignItems: 'flex-end' }}>Print</button>
      <div ref={contentRef} style={{padding: '50px', }} >
        {/* Sidebar */}
        <div style={{ width: '100%', maxWidth: '40%', float: 'left', paddingRight: '20px' }}>
          <div style={{ textAlign: 'center' }}>
            <img
              src='/images/profile_photo.jpeg'
              alt="Vikas Panchal"
              style={{ width: '150px', height: '150px', borderRadius: '50%', marginBottom: '20px',margin: '0 auto 20px', }}
            />
            <h2 style={{ fontSize: '20px', fontWeight: 'bold' }}>Vikas Panchal</h2>
            <div  style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start' }}>
              <p className='txt1'> 📍 Greater Noida, U.P- 201306</p>
              <p className='txt1'>📞 91.7838955179</p>
              <p className='txt1'>📧 eng.vikaspanchal91@gmail</p>
              <p className='txt1'>🌐 vikaspanchal.vercel.app</p>
            </div>
          </div>

          <div  style={{ marginTop: '20px' }}>
            <h2 className='txt1' style={{ fontWeight: 'bold' }}>Skills</h2>
            <ul style={{ listStyleType: 'disc', paddingLeft: '20px' }}>
              {[
                "Web development",
                "HTML and CSS",
                "JavaScript frameworks",
                "React and Next.js",
                "Node.js and Express.js",
                ". NET MVC",
                "Mobile app develop",
                "React Native",
                "SQL, PostgreSQL",
                "MongoDB",
                "UI frameworks",
                "Bootstrap and Tailwind",
                "Website builders",
                "Wix and AppyBuilder",
              ].map((skill, idx) => (
                <li className='txt1' key={idx}>&#x2022;{` ${skill}`}</li>
              ))}
            </ul>
          </div>

          <div style={{ marginTop: '20px' }}>
            <h2 className='txt1' style={{ fontWeight: 'bold', textTransform: 'uppercase', fontSize: '14px', marginBottom: '10px' }}>Computer Proficiency</h2>
            <ul style={{ listStyleType: 'disc', paddingLeft: '20px', fontSize: '14px' }}>
              <li className='txt1'>&#x2022; Windows</li>
              <li className='txt1'>&#x2022; Linux</li>
              <li className='txt1'>&#x2022; PhotoShop</li>
              <li className='txt1'>&#x2022; PageMaker</li>
              <li className='txt1'>&#x2022; CorelDRAW</li>
              <li className='txt1'>&#x2022; MS Office</li>
              <li className='txt1'>&#x2022; Hardware</li>
              <li className='txt1'>&#x2022; Typing</li>
            </ul>
          </div>

          <div style={{ marginTop: '20px' }}>
            <h2 className='txt1' style={{ fontWeight: 'bold' }}>Languages</h2>
            <ul style={{ listStyleType: 'disc', paddingLeft: '20px' }}>
              <li className='txt1'>&#x2022; English</li>
              <li className='txt1'>&#x2022; Hindi</li>
              <li className='txt1'>&#x2022; Punjabi</li>
            </ul>
          </div>

          <div style={{ marginTop: '20px' }}>
            <h2 className='txt1' style={{ fontWeight: 'bold' }}>Personal Info</h2>
            <ul style={{ listStyleType: 'disc', paddingLeft: '20px' }}>
              <li className='txt1'>&#x2022; Date of Birth: 01/10/91</li>
              <li className='txt1'>&#x2022; Nationality: Indian</li>
              <li className='txt1'>&#x2022; Marital Status: Married</li>
            </ul>
          </div>

          <div style={{ marginTop: '20px' }}>
            <h2 className='txt1' style={{ fontWeight: 'bold' }}>Hobbies and Interests</h2>
            <ul style={{ listStyleType: 'disc', paddingLeft: '20px' }}>
              <li className='txt1'>&#x2022; Reading Books</li>
              <li className='txt1'>&#x2022; Photography</li>
              <li className='txt1'>&#x2022; Travelling</li>
            </ul>
          </div>

          <div style={{ marginTop: '20px' }}>
            <h2 className='txt1' style={{ fontWeight: 'bold', textTransform: 'uppercase', fontSize: '14px', marginBottom: '10px' }}>Address</h2>
            <p className='txt1' style={{ fontSize: '14px' }}>
              Flat No. 101, Tower E-5,<br />
              Supertech Eco Village 1,<br />
              Bisrakh Jalalpur,<br />
              Greater Noida West,<br />
              Gautam Buddha Nagar - 201306
            </p>
          </div>
        </div>

        {/* Main Content */}
        <div style={{ padding: '20px', width: '100%', maxWidth: '60%', float: 'right' }}>
          <h1 style={{ fontSize: '30px', fontWeight: 'bold', color: '#1a8ea1', marginBottom: '10px' }}>Vikas Panchal</h1>
          <hr style={{ marginBottom: '20px', borderColor: '#1a8ea1' }} />
          <div style={{ marginTop: '20px', marginBottom: '20px' }}>
            <h2 className='txt1' style={{ fontWeight: 'bold' }}>Summary</h2>
            <p className='txt1' style={{ fontSize: '14px', lineHeight: '1.5' }}>
              Software Developer with extensive experience at Routa Digital and OYO Corporate Office, focusing on web and mobile application development. Proficient in React and Node.js, delivering optimized user experiences and efficient project workflows. Committed to collaboration and innovation, consistently producing high-quality applications that contribute to organizational success.
            </p>
          </div>

          <Section title="Work Experience">
            <ExperienceItem
              date="March 2024 - Present"
              role="Software Developer"
              company="Routa Digital Pvt. Ltd., Noida"
            />
            <ExperienceItem
              date="October 2019 - May 2021"
              role="Software Developer"
              company="OYO Corporate Office, Gurugram"
            />
            <ExperienceItem
              date="May 2016 - September 2019"
              role="Software Developer"
              company="Onkar Pvt. Ltd., Gurgaon"
            >
              <ul style={{ listStyleType: 'disc', paddingLeft: '20px', fontSize: '14px', marginTop: '5px', lineHeight: '1.5' }}>
                <li className='txt1'>Developed REST APIs for mobile applications to enhance functionality and performance.</li>
                <li className='txt1'>Debugged code to identify and resolve errors efficiently.</li>
                <li className='txt1'>Designed frontend interfaces using React for improved user experience.</li>
              </ul>
            </ExperienceItem>
          </Section>

          <Section title="Education">
            <ExperienceItem
              date="January 2013"
              role="B.Tech, Computer Science & Engineering"
              company="Mass College of Engineering & Management, Aligarh-Aligarh Highway, Sasni, Hathras"
            />
            <ExperienceItem
              date="January 2009"
              role="Higher Secondary, Non Medical"
              company="Gov. Sen. Sec. School, Haryana"
            />
            <ExperienceItem
              date="January 2008"
              role="High School, Non Medical"
              company="Gov. Sen. Sec. School, Haryana"
            />
          </Section>

          <Section title="Certifications">
            <ul style={{ listStyleType: 'disc', paddingLeft: '20px', fontSize: '14px', lineHeight: '1.5' }}>
              <li className='txt1'>Full Stack Data Science And AI, AlmaBetter, 2023</li>
              <li className='txt1'>Microsoft 365, Linkedin Learning, 2023</li>
              <li className='txt1'>Certified Security Expert, Innobuzz, 2014</li>
              <li className='txt1'>JavaScript Certificate, Code Academy</li>
              <li className='txt1'>Ethical Hacking Hands-on Training, Udemy</li>
            </ul>
          </Section>

          <Section title="Projects">
            <ul style={{ listStyleType: 'disc', paddingLeft: '20px', fontSize: '14px', lineHeight: '1.5' }}>
              <li className='txt1'>
                <strong className='txt1'>HRMS (Currently Working)</strong> – An <strong className='txt1'>HR management system</strong> for client <strong className='txt1'>V2 Retails, Gurgaon</strong>, focused on <strong className='txt1'>attendance tracking</strong>, <strong className='txt1'>payroll processing</strong>, and other HR functions. Built to streamline HR operations in real-time.
              </li >
              <li className='txt1'>
                <strong className='txt1'>Volvo Connected Architecture</strong> – An enterprise internal platform for <strong className='txt1'>application integration</strong> and <strong className='txt1'>creation</strong> within the Volvo ecosystem. Designed to manage connected services, streamline workflows, and support internal business applications.
              </li>
              <li className='txt1'>
                <strong className='txt1'>Movie Magnet</strong> – A Next.js app to explore movies and web shows using the TMDB API.
              </li>
              <li className='txt1'>
                <strong className='txt1'>Weather App</strong> – A React app showing real-time weather data and forecasts using Weather API.
              </li>
              <li className='txt1'>
                <strong className='txt1'>Text Utility (TextUtils)</strong> – A React-based text tool for case conversion and text operations.
              </li>
              <li className='txt1'>
                <strong className='txt1'>MBBS Study Overseas</strong> – A fully-featured website for students to explore MBBS programs abroad.
              </li>
              <li className='txt1'>
                <strong className='txt1'>Task Tracker</strong> – A React and Firebase-based task management app for personal and team productivity with CRUD features and notifications.
              </li>
              <li className='txt1'>
                <strong className='txt1'>BlogSphere</strong> – A full-stack blogging platform built using Node.js, Express, and MongoDB, featuring markdown support, authentication, and a WYSIWYG editor.
              </li>
              <li className='txt1'>
                <strong className='txt1'>Portfolio Website</strong> – A personal portfolio built using Next.js and Tailwind CSS, showcasing projects, blogs, and contact integration.
              </li>
              <li className='txt1'>
                <strong className='txt1'>Expense Tracker</strong> – A mobile-responsive web app to log and visualize personal expenses with charting using Chart.js.
              </li >
              <li className='txt1'>
                <strong className='txt1'>eCommerce Admin Dashboard</strong> – A React.js admin dashboard with data visualization, inventory management, and order tracking.
              </li>
              <li className='txt1'>
                <strong className='txt1'>ChatApp</strong> – A real-time chat application using Socket.io, Node.js, and React for instant messaging and room creation.
              </li>
              <li className='txt1'>
                <strong className='txt1'>Quizify</strong> – An interactive quiz application built with React and Firebase, supporting live scoring and timed quizzes.
              </li>
              <li className='txt1'>
                <strong className='txt1'>Landing Page Generator</strong> – A dynamic tool to generate responsive landing pages using form inputs, built with React and Tailwind CSS.
              </li>
              <li className='txt1'> 
                <strong className='txt1'>CryptoTracker</strong> – A crypto price monitoring dashboard using CoinGecko API with real-time updates and currency filter support.
              </li>
              <li className='txt1'>
                <strong className='txt1'>Fitness Club Website</strong> – A promotional site for a fitness club, built using HTML, CSS, and JavaScript with an integrated contact form.
              </li>
              <li className='txt1'>
                <strong className='txt1'>InvoiceXpress</strong> – A professional invoicing system with client management and PDF generation using React and Node.js.
              </li>
              <li className='txt1'>
                <strong className='txt1'>StudyBuddy</strong> – A collaborative study platform where students can share notes, quizzes, and schedule sessions. Built using MERN stack.
              </li>
              <li className='txt1'>
                <strong className='txt1'>DevFinder</strong> – A GitHub user search tool using the GitHub API with dark mode support, built in React.
              </li>
              <li className='txt1'>
                <strong className='txt1'>Pet Adoption Portal</strong> – A full-stack website to list and adopt pets from shelters, built with Django and React.
              </li>
              <li className='txt1'>
                <strong className='txt1'>Online Code Editor</strong> – A browser-based code editor with live preview for HTML, CSS, and JS, built using React and Web Workers.
              </li>
              <li className='txt1'>
                <strong className='txt1'>AI Resume Builder</strong> – A tool to generate professional resumes using AI prompts, with export options and templates.
              </li>
              <li className='txt1'>
                <strong className='txt1'>EventEase</strong> – An event scheduling and registration app built using Firebase and React with calendar sync support.
              </li>
              <li className='txt1'>
                <strong className='txt1'>FoodieFinder</strong> – A restaurant and recipe discovery app using Spoonacular API, with filters and bookmarking.
              </li>
              <li className='txt1'>
                <strong className='txt1'>SecureVault</strong> – A password manager with encryption, React frontend, and secure localStorage handling.
              </li>
            </ul>
          </Section>

        </div>
      </div>
    </div>
  );
};

const Section = ({ title, children }) => (
  <div style={{ marginBottom: '20px' }}>
    <h3 style={{ color: '#1a8ea1', textTransform: 'uppercase', fontWeight: '600', fontSize: '14px', marginBottom: '5px', marginTop: '20px' }}>{title}</h3>
    {children}
  </div>
);

const ExperienceItem = ({ date, role, company, children }) => (
  <div className='txt1' style={{ marginBottom: '10px', fontSize: '14px', lineHeight: '1.5' }}>
    <strong className='txt1'>{date}</strong>
    <p className='txt1'>
      &#8226; {role} — <span className='txt1' style={{ fontStyle: 'italic' }}>{company}</span>
    </p>
    {children}
  </div>
);

export default Resume;
