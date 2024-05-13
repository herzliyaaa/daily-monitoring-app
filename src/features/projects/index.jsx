import React, { useState, useEffect } from "react";
import axios from "axios";

export default function Projects() {
  const [columns, setColumns] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const GITHUB_TOKEN = import.meta.env.VITE_GITHUB_TOKEN;
  // const username = "herzliyaaa";
  // useEffect(() => {
  //   const fetchKanbanBoard = async () => {
  //     setIsLoading(true);
  //     try {
  //       // Fetch the projects
  //       // Get list of user repositories
  //       const userReposResponse = await axios.get(
  //         `https://api.github.com/users/${username}/repos`,
  //         {
  //           headers: {
  //             Authorization: `Bearer ${GITHUB_TOKEN}`,
  //             Accept: "application/vnd.github+json",
  //             "X-GitHub-Api-Version": "2022-11-28",
  //           },
  //         }
  //       );
  //       console.log(userReposResponse);

  //       // Iterate over each repository
  //       for (const repo of userReposResponse.data) {
  //         // Fetch projects for each repository
  //         const projectsResponse = await axios.get(
  //           `https://api.github.com/repos/${username}/${repo.name}/projects`,
  //           {
  //             headers: {
  //               Authorization: `Bearer ${GITHUB_TOKEN}`,
  //               'Accept': 'application/vnd.github.starfire-preview+json',
  //               "X-GitHub-Api-Version": "2022-11-28",
  //             },
  //           }
  //         );

  //         // Do something with projectsResponse.data
  //         console.log(`Projects for ${repo.full_name}:`, projectsResponse.data);
  //       }
  //     } catch (error) {
  //       console.error("Error fetching Kanban board:", error);
  //       setError("Failed to fetch Kanban board");
  //     }
  //     setIsLoading(false);
  //   };

  //   fetchKanbanBoard();
  // }, []);

  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div>
      <h1>Kanban Board</h1>
      {columns.map((column) => (
        <div key={column.id}>
          <h2>{column.name}</h2>
          <ul>
            {column.cards.map((card) => (
              <li key={card.id}>{card.note}</li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}
