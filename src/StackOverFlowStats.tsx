import React, { useState, useEffect } from "react";
import { API_Response } from "./interfaces/api";
import Card from "./components/Card";

export interface StackOverFlowStatsProps {
  className?: string;
  userId: number;
}

export const StackOverFlowStats: React.FC<StackOverFlowStatsProps> = ({
  className,
  userId
}) => {
  const [error, setError] = useState<string>(null);
  const [userData, setUserData] = useState<API_Response>();
  const [tags, setTags] = useState<string[]>();

  useEffect(() => {
    if(userId){
      fetch(
        `https://api.stackexchange.com/2.2/users/${userId}?order=desc&sort=reputation&site=stackoverflow`
      )
        .then(response => response.json())
        .then(data => {
            // if (data.error_id) setError("Error: Provide a valid userId as prop");
            if (data.items) setUserData(data.items[0]);
            console.log("Dataa", data.items[0]);
        });

      fetch(`https://api.stackexchange.com/2.2/users/${userId}/tags?order=desc&sort=popular&site=stackoverflow`).then(response => response.json()).then(data => {
        if(data.items) {
          let tags = data.items.slice(0, 5).map(chunk => chunk.name);
          setTags(tags);
        }
      })
    }
  }, [userId]);

  return (
    <section>
      {userData && tags ? (
        <>
          {/* <span>{userData.display_name}</span>
          <span>{userData.location}</span>
          <span>{userData.reputation}</span>
          <span>{userData.badge_counts.bronze}</span>
          <span>{userData.badge_counts.silver}</span>
          <span>{userData.badge_counts.gold}</span> */}
          <Card {...userData} tags={tags}/>
        </>
      ): <span>Loading ...</span>}
    </section>
  );
};

export default StackOverFlowStats;
