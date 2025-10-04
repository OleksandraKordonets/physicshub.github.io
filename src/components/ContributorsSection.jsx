// src/components/ContributorsSection.jsx
import React, { useEffect, useState } from "react";

export default function ContributorsSection() {
  const [contributors, setContributors] = useState([]);

  async function getContributors(page = 1) {
    const res = await fetch(
      `https://api.github.com/repos/physicshub/physicshub.github.io/contributors?per_page=100&page=${page}`
    );
    return res.ok ? res.json() : [];
  }

  async function getAllContributors() {
    let all = [];
    let page = 1;
    let batch = [];

    do {
      batch = await getContributors(page);
      all = all.concat(batch);
      page++;
    } while (batch.length > 0);

    return all;
  }

  useEffect(() => {
    getAllContributors().then(setContributors);
  }, []);

  return (
    <div className="contributors-section" id="contributors">
      <h2 className="title">Project Contributors</h2>
      <div className="contributors-grid">
        {contributors.map((c) => (
          <div key={c.id} className="contributor-card">
            <a href={c.html_url} target="_blank" rel="noopener noreferrer">
              <img
                src={c.avatar_url}
                alt={c.login}
                className="contributor-avatar"
                loading="lazy"
              />
            </a>
            <div className="contributor-info">
              <p className="contributor-name">{c.login}</p>
              <p className="contributor-data">
                {c.contributions}{" "}
                {c.contributions === 1 ? "commit" : "commits"}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
