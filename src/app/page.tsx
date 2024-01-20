'use client'
import { CardMedia, useMediaQuery } from "@mui/material";
import * as Styled from "./style";
import ButtonAppBar from "../components/AppBar/AppBar";
import Link from "next/link.js";

function Home() {
  const isMobileScreen = useMediaQuery("(max-width:1199px)");
  return (
    <>
      {isMobileScreen && <ButtonAppBar />}
      <Styled.Container>
        <Styled.BetweenContainer>
          <div>
            <Styled.Title>Welcome to our platform</Styled.Title>
            <Styled.Subtitle>
              We provide the best solution for register your sells. Join us
              today and boost your growth.
            </Styled.Subtitle>
            <br />
            <br />
            {!isMobileScreen && (
              <Link legacyBehavior href={`/auth`}>
                <Styled.Button>Get Started</Styled.Button>
              </Link>
            )}
          </div>
        </Styled.BetweenContainer>
      </Styled.Container>
    </>
  );
}

export default Home;
