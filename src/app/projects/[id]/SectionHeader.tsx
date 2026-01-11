interface SectionHeaderProps {
  title: string;
}

export const SectionHeader = ({ title }: SectionHeaderProps) => (
  <h2 className="text-3xl font-bold text-gray-50 leading-tight tracking-[-0.02em] pb-4 md:pb-0 md:w-1/3 md:shrink-0">
    {title}
  </h2>
);
