import React, { useState, useEffect } from "react";

export interface StackOverFlowStatsProps{
  className?: string;
  userId: number;
}

export const StackOverFlowStats: React.FC<StackOverFlowStatsProps> = ({
  className,
  userId
}) => {
  const [data, setData] = useState<any>([]);

  useEffect(() => {
    fetch(`https://api.stackexchange.com/2.2/users/${userId}?order=desc&sort=reputation&site=stackoverflow`).then(response => response.json()).then(data => setData(data));
  }, [userId]);

return <div className={className} style={{
  display: 'block',
  background: 'grey',
  margin: '10px',
  padding: '50px'
}}>{`Stats: ${data.toString()}`}</div>;
};

export default StackOverFlowStats;