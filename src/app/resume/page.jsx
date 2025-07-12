"use client";
//  import "./resume.css";
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
        <div style={{ width: '100%', maxWidth: '33%', float: 'left', paddingRight: '20px' }}>
          <div style={{ textAlign: 'center' }}>
            <img
              src='/images/profile_photo.jpeg'
              alt="Vikas Panchal"
              style={{ width: '150px', height: '150px', borderRadius: '50%', marginBottom: '20px',margin: '0 auto 20px', }}
            />
            <h2 style={{ fontSize: '20px', fontWeight: 'bold' }}>Vikas Panchal</h2>
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start' }}>
              <p> 📍 Greater Noida, U.P- 201306</p>
              <p>📞 91.7838955179</p>
              <p>📧 eng.vikaspanchal91@gmail</p>
              <p>🌐 vikaspanchal.vercel.app</p>
            </div>
          </div>

          <div style={{ marginTop: '20px' }}>
            <h2 style={{ fontWeight: 'bold' }}>Skills</h2>
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
                <li key={idx}>&#x2022;{` ${skill}`}</li>
              ))}
            </ul>
          </div>

          <div style={{ marginTop: '20px' }}>
            <h2 style={{ fontWeight: 'bold', textTransform: 'uppercase', fontSize: '14px', marginBottom: '10px' }}>Computer Proficiency</h2>
            <ul style={{ listStyleType: 'disc', paddingLeft: '20px', fontSize: '14px' }}>
              <li>&#x2022; Windows</li>
              <li>&#x2022; Linux</li>
              <li>&#x2022; PhotoShop</li>
              <li>&#x2022; PageMaker</li>
              <li>&#x2022; CorelDRAW</li>
              <li>&#x2022; MS Office</li>
              <li>&#x2022; Hardware</li>
              <li>&#x2022; Typing</li>
            </ul>
          </div>

          <div style={{ marginTop: '20px' }}>
            <h2 style={{ fontWeight: 'bold' }}>Languages</h2>
            <ul style={{ listStyleType: 'disc', paddingLeft: '20px' }}>
              <li>&#x2022; English</li>
              <li>&#x2022; Hindi</li>
              <li>&#x2022; Punjabi</li>
            </ul>
          </div>

          <div style={{ marginTop: '20px' }}>
            <h2 style={{ fontWeight: 'bold' }}>Personal Info</h2>
            <ul style={{ listStyleType: 'disc', paddingLeft: '20px' }}>
              <li>&#x2022; Date of Birth: 01/10/91</li>
              <li>&#x2022; Nationality: Indian</li>
              <li>&#x2022; Marital Status: Married</li>
            </ul>
          </div>

          <div style={{ marginTop: '20px' }}>
            <h2 style={{ fontWeight: 'bold' }}>Hobbies and Interests</h2>
            <ul style={{ listStyleType: 'disc', paddingLeft: '20px' }}>
              <li>&#x2022; Reading Books</li>
              <li>&#x2022; Photography</li>
              <li>&#x2022; Travelling</li>
            </ul>
          </div>

          <div style={{ marginTop: '20px' }}>
            <h2 style={{ fontWeight: 'bold', textTransform: 'uppercase', fontSize: '14px', marginBottom: '10px' }}>Address</h2>
            <p style={{ fontSize: '14px' }}>
              Flat No. 101, Tower E-5,<br />
              Supertech Eco Village 1,<br />
              Bisrakh Jalalpur,<br />
              Greater Noida West,<br />
              Gautam Buddha Nagar - 201306
            </p>
          </div>
        </div>

        {/* Main Content */}
        <div style={{ padding: '20px', width: '100%', maxWidth: '66%', float: 'right' }}>
          <h1 style={{ fontSize: '30px', fontWeight: 'bold', color: '#1a8ea1', marginBottom: '10px' }}>Vikas Panchal</h1>
          <hr style={{ marginBottom: '20px', borderColor: '#1a8ea1' }} />
          <div style={{ marginTop: '20px', marginBottom: '20px' }}>
            <h2 style={{ fontWeight: 'bold' }}>Summary</h2>
            <p style={{ fontSize: '14px', lineHeight: '1.5' }}>
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
                <li>Developed REST APIs for mobile applications to enhance functionality and performance.</li>
                <li>Debugged code to identify and resolve errors efficiently.</li>
                <li>Designed frontend interfaces using React for improved user experience.</li>
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
              <li>Full Stack Data Science And AI, AlmaBetter, 2023</li>
              <li>Microsoft 365, Linkedin Learning, 2023</li>
              <li>Certified Security Expert, Innobuzz, 2014</li>
              <li>JavaScript Certificate, Code Academy</li>
              <li>Ethical Hacking Hands-on Training, Udemy</li>
            </ul>
          </Section>

          <Section title="Projects">
            <ul style={{ listStyleType: 'disc', paddingLeft: '20px', fontSize: '14px', lineHeight: '1.5' }}>
              <li>
                <strong>HRMS (Currently Working)</strong> – An <strong>HR management system</strong> for client <strong>V2 Retails, Gurgaon</strong>, focused on <strong>attendance tracking</strong>, <strong>payroll processing</strong>, and other HR functions. Built to streamline HR operations in real-time.
              </li>
              <li>
                <strong>Volvo Connected Architecture</strong> – An enterprise internal platform for <strong>application integration</strong> and <strong>creation</strong> within the Volvo ecosystem. Designed to manage connected services, streamline workflows, and support internal business applications.
              </li>
              <li>
                <strong>Movie Magnet</strong> – A Next.js app to explore movies and web shows using the TMDB API.
              </li>
              <li>
                <strong>Weather App</strong> – A React app showing real-time weather data and forecasts using Weather API.
              </li>
              <li>
                <strong>Text Utility (TextUtils)</strong> – A React-based text tool for case conversion and text operations.
              </li>
              <li>
                <strong>MBBS Study Overseas</strong> – A fully-featured website for students to explore MBBS programs abroad.
              </li>
              <li>
                <strong>Task Tracker</strong> – A React and Firebase-based task management app for personal and team productivity with CRUD features and notifications.
              </li>
              <li>
                <strong>BlogSphere</strong> – A full-stack blogging platform built using Node.js, Express, and MongoDB, featuring markdown support, authentication, and a WYSIWYG editor.
              </li>
              <li>
                <strong>Portfolio Website</strong> – A personal portfolio built using Next.js and Tailwind CSS, showcasing projects, blogs, and contact integration.
              </li>
              <li>
                <strong>Expense Tracker</strong> – A mobile-responsive web app to log and visualize personal expenses with charting using Chart.js.
              </li>
              <li>
                <strong>eCommerce Admin Dashboard</strong> – A React.js admin dashboard with data visualization, inventory management, and order tracking.
              </li>
              <li>
                <strong>ChatApp</strong> – A real-time chat application using Socket.io, Node.js, and React for instant messaging and room creation.
              </li>
              <li>
                <strong>Quizify</strong> – An interactive quiz application built with React and Firebase, supporting live scoring and timed quizzes.
              </li>
              <li>
                <strong>Landing Page Generator</strong> – A dynamic tool to generate responsive landing pages using form inputs, built with React and Tailwind CSS.
              </li>
              <li>
                <strong>CryptoTracker</strong> – A crypto price monitoring dashboard using CoinGecko API with real-time updates and currency filter support.
              </li>
              <li>
                <strong>Fitness Club Website</strong> – A promotional site for a fitness club, built using HTML, CSS, and JavaScript with an integrated contact form.
              </li>
              <li>
                <strong>InvoiceXpress</strong> – A professional invoicing system with client management and PDF generation using React and Node.js.
              </li>
              <li>
                <strong>StudyBuddy</strong> – A collaborative study platform where students can share notes, quizzes, and schedule sessions. Built using MERN stack.
              </li>
              <li>
                <strong>DevFinder</strong> – A GitHub user search tool using the GitHub API with dark mode support, built in React.
              </li>
              <li>
                <strong>Pet Adoption Portal</strong> – A full-stack website to list and adopt pets from shelters, built with Django and React.
              </li>
              <li>
                <strong>Online Code Editor</strong> – A browser-based code editor with live preview for HTML, CSS, and JS, built using React and Web Workers.
              </li>
              <li>
                <strong>AI Resume Builder</strong> – A tool to generate professional resumes using AI prompts, with export options and templates.
              </li>
              <li>
                <strong>EventEase</strong> – An event scheduling and registration app built using Firebase and React with calendar sync support.
              </li>
              <li>
                <strong>FoodieFinder</strong> – A restaurant and recipe discovery app using Spoonacular API, with filters and bookmarking.
              </li>
              <li>
                <strong>SecureVault</strong> – A password manager with encryption, React frontend, and secure localStorage handling.
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
  <div style={{ marginBottom: '10px', fontSize: '14px', lineHeight: '1.5' }}>
    <strong>{date}</strong>
    <p>
      &#8226; {role} — <span style={{ fontStyle: 'italic' }}>{company}</span>
    </p>
    {children}
  </div>
);

export default Resume;
