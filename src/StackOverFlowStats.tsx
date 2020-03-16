import React, { useState, useEffect } from "react";
import { Wrapper } from "./components/Wrapper";
import { Span } from "./components/Span";

export interface StackOverFlowStatsProps {
  className?: string;
  userId: number;
}

export const StackOverFlowStats: React.FC<StackOverFlowStatsProps> = ({
  className,
  userId
}) => {
  //const [data, setData] = useState<any>([]);
  const [error, setError] = useState<string>("");
  const [userData, setUserData] = useState<any>([]);

  useEffect(() => {
    fetch(
      `https://api.stackexchange.com/2.2/users/${userId}?order=desc&sort=reputation&site=stackoverflow`
    )
      .then(response => response.json())
      .then(data => {
        if (data.length > 0) {
          if (data.error_id) setError("Error: Provide a valid userId as prop");

          if (data.items) setUserData(data.items[0]);
        }
      });
  }, [userId]);

  return (
    // <div
    //   className={className}
    //   style={{
    //     display: "block",
    //     background: "grey",
    //     margin: "10px",
    //     padding: "20px"
    //   }}
    // >
    //   {error !== "" && <p>{error}</p>}
    //   {userData.length > 0 && <>
    //     <span style={{}}></span>
    //   </>}
    // </div>
    <Wrapper>
      {error !== "" && <Span>{error}</Span>}
      {userData.length > 0 && (
        <>
          <Span>{userData.display_name}</Span>
          <Span>{userData.location}</Span>
          <Span>{userData.reputation}</Span>
          <Span>{userData.badge_counts.bronze}</Span>
          <Span>{userData.badge_counts.silve}</Span>
          <Span>{userData.badge_counts.gold}</Span>
        </>
      )}
    </Wrapper>
  );
};

export default StackOverFlowStats;
