// "use client";
// import React, { useEffect, useMemo, useState } from "react";
// import ArticlesCard from "./ArticlesCard";
// import {
//   Heading,
//   Box,
//   Center,
//   SimpleGrid,
//   Modal,
//   ModalOverlay,
//   ModalContent,
//   ModalCloseButton,
//   ModalBody,
//   useDisclosure,
//   ModalHeader,
//   Link,
// } from "@chakra-ui/react";
// import NewsLetterComponent from "./NewsLetterComponent";
// import { getArticlesData } from "../../utils/utils";
// import { FidgetSpinner } from "react-loader-spinner";
// import { RevealWrapper } from "next-reveal";

// const Blogs = () => {
//   const { isOpen, onOpen, onClose } = useDisclosure();
//   const [articlesData, setArticlesData] = useState([]);
//   const [isLoading, setIsLoading] = useState(true);
//   const [activeCard, setActiveCard] = useState();
//   const activeCardBrief = useMemo(() => {
//     // article brief from hashnode, is not completely full itgives ... at end so we have fixed the issue by omitting the string
//     const fixedBrief = activeCard?.brief
//       ?.substring(0, activeCard.brief.length - 3)
//       .split(". ");
//     fixedBrief?.pop();
//     return `${fixedBrief?.join(". ")}.`;
//   }, [activeCard]);
//   const onCloseHandler = () => {
//     setActiveCard([]);
//     onClose();
//   };

//   useEffect(() => {
//     getArticlesData().then((data) => {
//       setArticlesData(data.map(data=>data.node));
//       setIsLoading(false);
//     });
//   }, []);

//   return (
//     <>
//       <Center my={5}>
//         {isLoading ? (
//           <Box
//             position="absolute"
//             display="flex"
//             top="40vh"
//             justifyContent="center"
//           >
//             <FidgetSpinner
//               visible={true}
//               height="100"
//               width="100"
//               ariaLabel="dna-loading"
//               wrapperClass="dna-wrapper"
//               ballColors={["#ff0000", "#00ff00", "#0000ff"]}
//               backgroundColor="white"
//             />
//           </Box>
//         ) : (
//           <Box width={["87vw", "87vw", "95vw"]} height="100%">
//             <Heading className="sub-heading" size="md">
//               BLOGS
//             </Heading>

//             <NewsLetterComponent />
//             <RevealWrapper className="load-hidden" delay={300}>
//               <SimpleGrid
//                 spacing={4}
//                 templateColumns={[
//                   "repeat(auto-fill, minmax(250px, 1fr))",
//                   "repeat(auto-fill, minmax(250px, 1fr))",
//                   "repeat(auto-fill, minmax(300px, 1fr))",
//                 ]}
//               >
//                 {articlesData?.map((data, index) => (
//                   <ArticlesCard
//                     key={index}
//                     {...{ data, setActiveCard, onOpen }}
//                   />
//                 ))}
//               </SimpleGrid>
//             </RevealWrapper>
//           </Box>
//         )}
//         <Modal
//           isOpen={isOpen}
//           onClose={onCloseHandler}
//           isCentered
//           size={["xs", "md"]}
//         >
//           <ModalOverlay />
//           <ModalContent>
//             <ModalHeader>
//               <Link
//                 href={`https://codersk36.hashnode.dev/${activeCard?.slug}`}
//                 target="_blank"
//               >
//                 {activeCard?.title}
//               </Link>
//             </ModalHeader>
//             <ModalCloseButton />
//             <ModalBody>
//               <Box my={3}>{activeCardBrief}</Box>
//             </ModalBody>
//           </ModalContent>
//         </Modal>
//       </Center>
//     </>
//   );
// };

// export default Blogs;


"use client";
import React from "react";
import {
  Box,
  Center,
  Heading,
  SimpleGrid,
  Image,
  Text,
} from "@chakra-ui/react";
import { RevealWrapper } from "next-reveal";
import { useRouter } from "next/navigation";
import { FidgetSpinner } from "react-loader-spinner";
import alma from '../../media/almabetter.jpg'
import Udemy from '../../media/udemy.jpg'
import Code from '../../media/code.jpg'


const CertificationsShowcase = () => {
  const router = useRouter();
  const [isLoading, setIsLoading] = React.useState(false);

  // 🏅 Your certification data
  const certifications = [
    {
      id: 1,
      title: "Full Stack Data Science And AI",
      organization: "AlmaBetter",
      image: alma,
      description:
        "Successfully completed AlmaBetter’s Full Stack Data Science and AI program, covering Python, statistics, machine learning, deep learning, SQL, and data visualization projects.",
    },
    {
      id: 2,
      title: "Ethical Hacking Hands-on Training",
      organization: "Udemy",
      image: Udemy,
      description:
        "Completed Udemy’s Ethical Hacking Hands-on Training, gaining practical experience in penetration testing, vulnerability assessment, network security, and ethical hacking tools like Kali Linux and Metasploit.",
    },
    {
      id: 3,
      title: "JavaScript Certificate",
      organization: "Codecademy",
      image: Code,
      description:
        "Earned the JavaScript Certificate from Codecademy, demonstrating strong understanding of ES6+, DOM manipulation, asynchronous programming, and modern web development fundamentals.",
    },
  ];


  const handleNavigate = (cert) => {
    console.log('cert', cert);
    
    window.open(`${cert.image.src}`, "_blank");
  };

  return (
    <Center my={5}>
      {isLoading ? (
        <Box
          position="absolute"
          display="flex"
          top="40vh"
          justifyContent="center"
        >
          <FidgetSpinner
            visible={true}
            height="100"
            width="100"
            ariaLabel="loading"
            ballColors={["#ff0000", "#00ff00", "#0000ff"]}
            backgroundColor="white"
          />
        </Box>
      ) : (
        <Box width={["87vw", "87vw", "95vw"]} height="100%">
          <Heading className="sub-heading" size="md" textAlign="center" mb={4}>
            CERTIFICATIONS
          </Heading>

          <RevealWrapper className="load-hidden" delay={200}>
            <SimpleGrid
              spacing={6}
              templateColumns={[
                "repeat(auto-fill, minmax(240px, 1fr))",
                "repeat(auto-fill, minmax(280px, 1fr))",
                "repeat(auto-fill, minmax(320px, 1fr))",
              ]}
            >
              {certifications.map((cert) => (
                <Box
                  key={cert.id}
                  borderWidth="1px"
                  borderRadius="2xl"
                  overflow="hidden"
                  boxShadow="md"
                  bg="white"
                  _hover={{
                    transform: "scale(1.03)",
                    boxShadow: "xl",
                    transition: "0.3s",
                    cursor: "pointer",
                  }}
                  onClick={() => handleNavigate(cert)}
                >
                  <Image
                    src={cert.image.src}
                    alt={cert.title}
                    objectFit="cover"
                    width="100%"
                    height="180px"
                  />
                  <Box p={4}>
                    <Heading size="sm" mb={1}>
                      {cert.title}
                    </Heading>
                    <Text fontSize="sm" color="gray.500" mb={2}>
                      {cert.organization}
                    </Text>
                    <Text fontSize="sm" color="gray.600" noOfLines={3}>
                      {cert.description}
                    </Text>
                  </Box>
                </Box>
              ))}
            </SimpleGrid>
          </RevealWrapper>
        </Box>
      )}
    </Center>
  );
};

export default CertificationsShowcase;
