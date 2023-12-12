import { Flex, HStack, chakra, Image } from "@chakra-ui/react";
import { Link } from "@chakra-ui/next-js";
import React from "react";
import MobileHeader from "./MobileHeader";
import { links } from "../utils/constants";
import { usePathname } from "next/navigation";
import { RevealWrapper } from "next-reveal";

export default function Header() {
  const pathname = usePathname();

  return (
    <chakra.header
      id="header"
      backgroundColor="blueTheme.navBg"
      pos="sticky"
      top={0}
      zIndex="100"
      boxShadow="0 10px 30px -10px blueTheme.navShadow"
      
    >
      <Flex w="100%" px="6" py="5" align="center" justify="space-between">
        <Link
          href="/"
          fontFamily="Righteous"
          fontSize="lg"
          _hover={{ textDecoration: "none", color:"blueTheme.navLinkActive",transition:"all .5s ease-in-out" }}
        >
          VIKAS PANCHAL  {"</>"} {" "}
        </Link>

        <HStack as="nav" spacing="5" display={{ base: "none", md: "flex" }}>
          {links.map((link, index) => (
            <Link
              key={index}
              href={link.path}
              fontWeight="extrabold"
              _hover={{ textDecoration: "none", color: "blueTheme.navLinkActive" }}
              fontSize="lg"
              className={pathname === link.path ? "active-link" : ""}
            >
              {link.text}
            </Link>
          ))}
        </HStack>
        <RevealWrapper className="load-hidden">
            <Image
              objectFit="shrink"
              src="/images/nextjs.png"
              alt="profile-image"
              width={["5rem"]}
              height={["2rem"]}
            />
          </RevealWrapper>
        <HStack>
          <MobileHeader {...{ pathname }} />
        </HStack>
        
      </Flex>
    </chakra.header>
  );
}
