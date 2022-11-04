import Header from "./header";
import Footer from "./footer";
import styled from "styled-components";
import { useRouter } from "next/router";

export default function Layout({ children }) {
  const { pathname } = useRouter();

  return (
    <>
      {pathname === "/" || pathname === "/login" ? null : <Header />}
      <Main>{children}</Main>
      {pathname === "/" || pathname === "/login" ? null : <Footer />}
    </>
  );
}

const Main = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;
  z-index: -1;
  top: 52.2px;
  padding: 20px 20px 70px 20px;
`;
