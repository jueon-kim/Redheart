import React, { ReactNode } from "react";
import { useMediaQuery } from "react-responsive";

// Props 타입 정의
interface MediaProps {
  children: ReactNode;
}

// PC 컴포넌트
const PC: React.FC<MediaProps> = ({ children }) => {
  const isPc = useMediaQuery({
    query: "(max-width: 1920px)",
  });
  return <>{isPc && children}</>;
};

//테블릿 텀포넌트
const Tablet: Reac.FC<MediaProps> = ({ children }) => {
  const isTablet = useMediaQuery({
    query: "(max-width: 768px)",
  });
  return <>{isTablet && children}</>
};

// Mobile 컴포넌트
const Mobile: React.FC<MediaProps> = ({ children }) => {
  const isMobile = useMediaQuery({
    query: "(max-width: 360px)",
  });
  return <>{isMobile && children}</>;
};

export { PC, Mobile, Tablet };
