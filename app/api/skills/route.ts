import { NextResponse } from "next/server";
import { skillGroups } from "@/lib/data";

export async function GET() {
  const flattenedSkills = skillGroups.flatMap((group) =>
    group.skills.map((skillName) => ({
      name: skillName,
      category: group.label,
    }))
  );

  return NextResponse.json(flattenedSkills);
}