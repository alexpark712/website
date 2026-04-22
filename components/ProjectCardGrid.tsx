"use client";

import { useState } from "react";
import Link from "next/link";

interface ProjectItem {
  slug: string;
  title: string;
  description: string;
  tags: string[];
}

const CARD_COLORS = [
  "#404040", "#464646", "#3c3c3c", "#4a4a4a", "#363636",
  "#434343", "#4c4c4c", "#3a3a3a", "#444444", "#4e4e4e",
  "#383838", "#424242", "#3e3e3e", "#484848",
];

export default function ProjectCardGrid({ items }: { items: ProjectItem[] }) {
  const [sort, setSort] = useState<"newest" | "az">("newest");

  const sorted =
    sort === "az"
      ? [...items].sort((a, b) => a.title.localeCompare(b.title))
      : items;

  return (
    <>
      <div className="grid-page-header">
        <h1>Projects</h1>
        <div className="grid-sort">
          <span className="sort-label">Sort by:</span>
          <button
            className={`sort-btn${sort === "newest" ? " active" : ""}`}
            onClick={() => setSort("newest")}
          >
            Newest
          </button>
          <button
            className={`sort-btn${sort === "az" ? " active" : ""}`}
            onClick={() => setSort("az")}
          >
            A–Z
          </button>
        </div>
      </div>
      <div className="card-grid">
        {sorted.map((item, i) => (
          <Link
            key={item.slug}
            href={`/projects/${item.slug}`}
            className="card"
          >
            <div
              className="card-image"
              style={
                { "--img-color": CARD_COLORS[i % CARD_COLORS.length] } as React.CSSProperties
              }
            >
              <div className="card-image-text">{item.tags[0]}</div>
              <div className="card-overlay">
                <div className="card-overlay-tag">{item.tags.join(" · ")}</div>
                <div className="card-overlay-title">{item.title}</div>
                <div className="card-overlay-desc">{item.description}</div>
              </div>
            </div>
            <div className="card-footer">
              <div className="card-footer-tag">{item.tags.join(" · ")}</div>
              <div className="card-footer-title">{item.title}</div>
            </div>
          </Link>
        ))}
      </div>
    </>
  );
}
