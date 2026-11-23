import {
  Card,
  CardContent,
  CardHeader,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

interface SkillCardProps {
  category: string;
  skills: readonly string[];
}

export function SkillCard({ category, skills }: SkillCardProps) {
  return (
    <Card className="h-full">
      <CardHeader>
        <h3 className="font-heading text-base font-semibold">{category}</h3>
      </CardHeader>
      <CardContent className="flex flex-wrap gap-2">
        {skills.map((skill) => (
          <Badge key={skill} variant="secondary">
            {skill}
          </Badge>
        ))}
      </CardContent>
    </Card>
  );
}
