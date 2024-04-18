import React, { useEffect, useRef } from "react";
import { animate, useInView } from "framer-motion";
import styled from "styled-components";

export const CountUpStats = () => {
  return (
    <Container>
      <Title> 
        We take pride in our Product and we have some stats to prove it!
      </Title>

      <StatsContainer>
        <Stat num={45} suffix="%" subheading="Increased productivity" />
        <Divider />
        <Stat
          num={15.5}
          decimals={1}
          suffix="K+"
          subheading="Active monthly users"
        />
        <Divider />
        <Stat num={20} suffix="B+" subheading="Total revenue generated" />
      </StatsContainer>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 8rem;


  font-family: "poppins", sans-serif;
`;

const Title = styled.h2`
  margin-bottom: 2rem;
  font-size: 1.5rem;
  font-weight: 600;
  color: #2d3748;
  text-align: center;
  margin-bottom: 2rem;
  text-transform: uppercase;

  span {
    color: #3182ce;
  }
`;

const StatsContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 2rem;
  margin-bottom: 2rem;
  padding: 0 2rem;
`;

const Divider = styled.div`
  height: 5rem;
  width: 1px;
  background-color: #191b24;
  margin: 0 2rem;
`;

const Stat = ({ num, suffix, decimals = 0, subheading }) => {
  const ref = useRef(null);
  const isInView = useInView(ref);

  useEffect(() => {
    if (!isInView) return;

    animate(0, num, {
      duration: 2.5,
      onUpdate(value) {
        if (!ref.current) return;

        ref.current.textContent = value.toFixed(decimals);
      },
    });
  }, [num, decimals, isInView]);

  return (
    <StatContainer>
      <StatNumber>
        <span ref={ref}></span>
        {suffix}
      </StatNumber>

      <StatSubheading>{subheading}</StatSubheading>
    </StatContainer>
  );
};

const StatContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 2rem 0;
`;

const StatNumber = styled.p`
  margin-bottom: 0.5rem;
  text-align: center;
  font-size: 3rem;
  font-weight: 600;

  /* span {
    font-size: 4rem;
  
  } */
`;

const StatSubheading = styled.p`
  max-width: 12rem;
  font-size: 1rem;
  text-align: center;
  color: #a0aec0;
`;

export default CountUpStats;
