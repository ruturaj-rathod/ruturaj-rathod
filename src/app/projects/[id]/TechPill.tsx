interface TechPillProps {
  label: string;
}

export const TechPill = ({ label }: TechPillProps) => (
  <div className="flex h-8 shrink-0 items-center justify-center gap-x-2 rounded-lg bg-black/5 dark:bg-white/10 px-3">
    <p className="text-sm font-medium leading-normal">{label}</p>
  </div>
);
