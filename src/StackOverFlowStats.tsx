import React, { useState, useEffect } from "react";

export interface StackOverFlowStatsProps {
  className?: string;
  userId: number;
}

export const StackOverFlowStats: React.FC<StackOverFlowStatsProps> = ({
  className,
  userId
}) => {
  const [error, setError] = useState<string>(null);
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
    <section>
      {error && <span>{error}</span>}
      {userData.length > 0 && (
        <>
          <span>{userData.display_name}</span>
          <span>{userData.location}</span>
          <span>{userData.reputation}</span>
          <span>{userData.badge_counts.bronze}</span>
          <span>{userData.badge_counts.silve}</span>
          <span>{userData.badge_counts.gold}</span>
        </>
      )}
    </section>
  );
};

export default StackOverFlowStats;
