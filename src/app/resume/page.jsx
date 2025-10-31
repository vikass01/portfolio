"use client";
import "./resume.css";
// import photo from '../media/profile_photo.jpeg'
import React, { useRef } from 'react';
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';
import { FaFileDownload } from "react-icons/fa";


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

  const atsGeneratePdf = () => {
    const doc = new jsPDF({ unit: "pt", format: "a4" });
    const pageHeight = doc.internal.pageSize.height;
    const marginLeft = 40;
    const maxWidth = 520;
    const lineHeight = 16;
    let y = 60;

    const addText = (text, bold = false) => {
      const split = doc.splitTextToSize(text, maxWidth);
      doc.setFont("Helvetica", bold ? "bold" : "normal");
      split.forEach((line) => {
        if (y + lineHeight > pageHeight - 40) {
          doc.addPage();
          y = 60;
        }
        doc.text(line, marginLeft, y);
        y += lineHeight;
      });
    };

    const addSection = (title) => {
      doc.setFontSize(14);
      doc.setFont("Helvetica", "bold");
      addText(title);
      doc.setDrawColor(0);
      doc.setLineWidth(0.5);
      doc.line(marginLeft, y, 550, y);
      y += 10;
      doc.setFontSize(11);
    };

    // --------------------------
    // Header
    // --------------------------
    doc.setFontSize(18);
    doc.setFont("Helvetica", "bold");
    addText("Vikas Panchal");
    doc.setFontSize(11);
    addText("Greater Noida, U.P - 201306");
    addText("+91 7838955179");
    addText("eng.vikaspanchal91@gmail.com");
    addText("vikaspanchal.vercel.app");
    y += 10;

    // --------------------------
    addSection("SUMMARY");
    addText(
      "Software Developer with extensive experience at Routa Digital and OYO Corporate Office, focusing on web and mobile application development. Proficient in React and Node.js, delivering optimized user experiences and efficient project workflows. Committed to collaboration and innovation, consistently producing high-quality applications that contribute to organizational success."
    );
     y += 10;
    // --------------------------
    addSection("TECHNICAL SKILLS");
    [
      "Web development, HTML5, CSS3, JavaScript (ES6+)",
      "React.js, Next.js, Node.js, Express.js, .NET MVC",
      "SQL, PostgreSQL, MongoDB",
      "Bootstrap, Tailwind CSS, Ant Design, Redux",
      "Git, VS Code, Webpack, Vite, Postman, npm",
      "Wix, AppyBuilder, React Native",
    ].forEach((skill) => addText("• " + skill));
    y += 10;
    // --------------------------
    addSection("CERTIFICATIONS");
    [
      "Full Stack Data Science And AI – AlmaBetter, 2023",
      "Microsoft 365 – LinkedIn Learning, 2023",
      "Certified Security Expert – Innobuzz, 2014",
      "JavaScript Certificate – Code Academy",
      "Ethical Hacking Hands-on Training – Udemy",
    ].forEach((c) => addText("• " + c));
    y += 10;
    // --------------------------
    addSection("COMPUTER PROFICIENCY");
    [
      "Windows, Linux, Photoshop, PageMaker, CorelDRAW, MS Office, Hardware, Typing",
    ].forEach((item) => addText("• " + item));

    y += 10;

    // --------------------------
    addSection("WORK EXPERIENCE");
    addText("Software Developer | Routa Digital Pvt. Ltd., Noida");
    addText("March 2024 – Sept 2025");
    addText(
      "• Developed multiple scalable React and Next.js applications integrating REST APIs and UI frameworks."
    );
    addText(
      "• Focused on reusable components, performance optimization, and SEO-friendly design."
    );
    addText(
      "• Implemented Ant Design-based dashboards and HRMS modules for enterprise clients."
    );

    y += 5;
    addText("Software Developer | OYO Corporate Office, Gurugram");
    addText("October 2019 – January 2024");
    addText("• Developed REST APIs for mobile applications to enhance functionality and performance.");
    addText("• Debugged and resolved errors efficiently in live projects.");
    addText("• Designed responsive front-end interfaces using React.js.");

    // --------------------------
    addSection("EDUCATION");
    addText("B.Tech in Computer Science & Engineering");
    addText("Mass College of Engineering & Management, Aligarh, AKTU (2016)");
    addText("Higher Secondary (Non-Medical), Gov. Sen. Sec. School, Haryana (2009)");
    addText("High School (Non-Medical), Gov. Sen. Sec. School, Haryana (2008)");
    y += 10;
    // --------------------------
    addSection("PROJECTS");
    [
      "HRMS (V2 Retails, Gurgaon) – HR management system with attendance, payroll, and leave tracking.",
      "Volvo Connected Architecture – Internal enterprise platform for app integration and workflow automation.",
      "Movie Magnet – Next.js app using TMDB API for movies and shows.",
      "Weather App – Real-time weather forecasting in React.",
      "TextUtils – React-based text editing tool.",
      "MBBS Study Overseas – Educational website for abroad medical programs.",
      "Task Tracker – React + Firebase app for personal and team productivity.",
      "BlogSphere – Node.js + MongoDB blogging platform with authentication.",
      "Portfolio Website – Next.js + Tailwind personal site showcasing projects.",
      "Expense Tracker – React app with Chart.js visualization.",
      "eCommerce Admin Dashboard – React dashboard with data visualization and management.",
      "ChatApp – Real-time chat using Socket.io, Node.js, and React.",
      "Quizify – Interactive quiz app using React and Firebase.",
      "Landing Page Generator – Dynamic responsive landing pages in React + Tailwind CSS.",
    ].forEach((proj) => addText("• " + proj));
    y += 10;
        // --------------------------
    addSection("LANGUAGES");
    ["English", "Hindi", "Punjabi"].forEach((lang) => addText("• " + lang));

    // --------------------------
    addSection("PERSONAL INFORMATION");
    addText("• Date of Birth: 01/10/1991");
    addText("• Nationality: Indian");
    addText("• Marital Status: Married");
    y += 10;
    // --------------------------
    addSection("HOBBIES AND INTERESTS");
    ["Reading Books", "Photography", "Travelling"].forEach((h) =>
      addText("• " + h)
    );
    y += 10;
    // --------------------------
    addSection("ADDRESS");
    addText(
      "Flat No. 101, Tower E-5, Supertech Eco Village 1, Bisrakh Jalalpur, Greater Noida West, Gautam Buddha Nagar - 201306"
    );
    y += 10;
    // --------------------------
    doc.save("Vikas_Panchal_ATS_Resume.pdf");
  };
  

  return (
    <div style={{width:800, display: 'flex', flexDirection: 'column', backgroundColor:'#fff' }}>
      <div style={{width:'100%', display:'flex', justifyContent:'flex-end', flexDirection:'row', alignItems:'center', gap:5}}>
      <FaFileDownload  title="Download Normal PDF" onClick={generatePdf} fontSize={22} style={{backgroundColor:'black', cursor:'pointer', margin:10,}}/>
      <FaFileDownload
        onClick={atsGeneratePdf}
        style={{
          cursor: "pointer",
          background: "black",   
          marginRight:10,       
        }}
        title="Download ATS PDF"
        fontSize={22}
      />
      </div>
      {/* <button onClick={generatePdf} style={{ cursor: 'pointer', padding: '10px 20px', backgroundColor: '#1a8ea1', color: '#fff', border: 'none', borderRadius: '5px', marginBottom: '20px', alignItems: 'flex-end' }}>Download Pdf</button> */}
      <div ref={contentRef} style={{padding: '50px', }} >
        {/* Sidebar */}
        <div style={{ width: '100%', maxWidth: '40%', float: 'left', paddingRight: '20px' }}>
          <div style={{ textAlign: 'center' }}>
            <img
              src='/images/profile_photo.jpeg'
              alt="Vikas Panchal"
              style={{ width: '150px', height: '150px', borderRadius: '50%', marginBottom: '20px',margin: '0 auto 20px', }}
            />
            <h2 className='txt1' style={{ fontSize: '20px', fontWeight: 'bold' }}>Vikas Panchal</h2>
            <hr className="colored-divider" />
            <div  style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start' }}>
              <p className='txt1'> 📍 Greater Noida, U.P- 201306</p>
              <p className='txt1'>📞 91.7838955179</p>
              <p className='txt1'>📧 eng.vikaspanchal91@gmail</p>
              <p className='txt1'>🌐 vikaspanchal.vercel.app</p>
            </div>
          </div>

          <div  style={{ marginTop: '20px' }}>
            <h2 className='txt1' style={{ fontWeight: 'bold' }}>Skills</h2>
            <hr className="colored-divider" />
            <ul style={{ listStyleType: 'disc',  paddingLeft: '20px' }}>
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
                <li className='txt1' key={idx}>{`${skill}`}</li>
              ))}
            </ul>
          </div>

          <div  style={{ marginTop: '20px' }}>
            <h2 className='txt1' style={{ fontWeight: 'bold' }}>Certifications</h2>
            <hr className="colored-divider" />
            <ul style={{ listStyleType: 'disc', paddingLeft: '20px', fontSize: '14px'  }}>
              {[
                "Full Stack Data Science And AI, AlmaBetter, 2023",
                "Microsoft 365, Linkedin Learning, 2023",
                "Certified Security Expert, Innobuzz, 2014",
                "JavaScript Certificate, Code Academy",
                "Ethical Hacking Hands-on Training, Udemy",
              ].map((skill, idx) => (
                <li className='txt1' key={idx}>{` ${skill}`}</li>
              ))}
            </ul>
          </div>

          <div style={{ marginTop: '20px' }}>
            <h2 className='txt1' style={{ fontWeight: 'bold', textTransform: 'uppercase', fontSize: '14px', marginBottom: '10px' }}>Computer Proficiency</h2>
            <hr className="colored-divider" />
            <ul style={{ listStyleType: 'disc', paddingLeft: '20px', fontSize: '14px' }}>
              <li className='txt1'> Windows</li>
              <li className='txt1'> Linux</li>
              <li className='txt1'> PhotoShop</li>
              <li className='txt1'> PageMaker</li>
              <li className='txt1'> CorelDRAW</li>
              <li className='txt1'> MS Office</li>
              <li className='txt1'> Hardware</li>
              <li className='txt1'> Typing</li>
            </ul>
          </div>

          <div style={{ marginTop: '20px' }}>
            <h2 className='txt1' style={{ fontWeight: 'bold' }}>Languages</h2>
            <hr className="colored-divider" />
            <ul style={{ listStyleType: 'disc', paddingLeft: '20px' }}>
              <li className='txt1'> English</li>
              <li className='txt1'> Hindi</li>
              <li className='txt1'> Punjabi</li>
            </ul>
          </div>

          <div style={{ marginTop: '20px' }}>
            <h2 className='txt1' style={{ fontWeight: 'bold' }}>Personal Info</h2>
            <hr className="colored-divider" />
            <ul style={{ listStyleType: 'disc', paddingLeft: '20px' }}>
              <li className='txt1'> Date of Birth: 01/10/91</li>
              <li className='txt1'> Nationality: Indian</li>
              <li className='txt1'> Marital Status: Married</li>
            </ul>
          </div>

          <div style={{ marginTop: '20px' }}>
            <h2 className='txt1' style={{ fontWeight: 'bold' }}>Hobbies and Interests</h2>
            <hr className="colored-divider" />
            <ul style={{ listStyleType: 'disc', paddingLeft: '20px' }}>
              <li className='txt1'> Reading Books</li>
              <li className='txt1'> Photography</li>
              <li className='txt1'> Travelling</li>
            </ul>
          </div>

          <div style={{ marginTop: '20px' }}>
            <h2 className='txt1' style={{ fontWeight: 'bold', textTransform: 'uppercase', fontSize: '14px', marginBottom: '10px' }}>Address</h2>
            <hr className="colored-divider" />
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
            <h2 style={{ fontWeight: 'bold', color: '#1a8ea1', }}>SUMMARY</h2>
            <hr className="colored-divider" />
            <p className='txt1' style={{ fontSize: '14px', lineHeight: '1.5' }}>
              Software Developer with extensive experience at Routa Digital and OYO Corporate Office, focusing on web and mobile application development. Proficient in React and Node.js, delivering optimized user experiences and efficient project workflows. Committed to collaboration and innovation, consistently producing high-quality applications that contribute to organizational success.
            </p>
          </div>

          <Section title="Work Experience">
            <ExperienceItem
              date="March 2024 - 2nd Sept 2025"
              role="Software Developer"
              company="Routa Digital Pvt. Ltd., Noida"
            />
            <ExperienceItem
              date="October 2019 - Jan 2024"
              role="Software Developer"
              company="OYO Corporate Office, Gurugram"
            >
              <ul style={{ listStyleType: 'disc', paddingLeft: '20px', fontSize: '14px', marginTop: '5px', lineHeight: '1.5' }}>
                <li className='txt1'>Developed REST APIs for mobile applications to enhance functionality and performance.</li>
                <li className='txt1'>Debugged code to identify and resolve errors efficiently.</li>
                <li className='txt1'>Designed frontend interfaces using React for improved user experience.</li>
              </ul>
            </ExperienceItem>
            {/* <ExperienceItem
              date="May 2016 - September 2019"
              role="Software Developer"
              company="Onkar Pvt. Ltd., Gurgaon"
            >
              <ul style={{ listStyleType: 'disc', paddingLeft: '20px', fontSize: '14px', marginTop: '5px', lineHeight: '1.5' }}>
                <li className='txt1'>Developed REST APIs for mobile applications to enhance functionality and performance.</li>
                <li className='txt1'>Debugged code to identify and resolve errors efficiently.</li>
                <li className='txt1'>Designed frontend interfaces using React for improved user experience.</li>
              </ul>
            </ExperienceItem> */}
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

          {/* <Section title="Certifications">
            <ul style={{ listStyleType: 'disc', paddingLeft: '20px', fontSize: '14px', lineHeight: '1.5' }}>
              <li className='txt1'>Full Stack Data Science And AI, AlmaBetter, 2023</li>
              <li className='txt1'>Microsoft 365, Linkedin Learning, 2023</li>
              <li className='txt1'>Certified Security Expert, Innobuzz, 2014</li>
              <li className='txt1'>JavaScript Certificate, Code Academy</li>
              <li className='txt1'>Ethical Hacking Hands-on Training, Udemy</li>
            </ul>
          </Section> */}

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
              {/* <li className='txt1'> 
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
              </li> */}
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
    <hr className="colored-divider" />
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
