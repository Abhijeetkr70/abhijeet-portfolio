import { NextResponse } from "next/server";
import { projects } from "@/lib/data";

export async function GET() {
  const formattedProjects = projects.map((p) => ({
    id: p.id,
    title: p.name,
    tagline: p.tagline,
    description: p.overview,
    stack: p.stack,
    github: p.github,
    live: p.live,
    url: p.live || p.github,
  }));

  return NextResponse.json({ projects: formattedProjects });
}