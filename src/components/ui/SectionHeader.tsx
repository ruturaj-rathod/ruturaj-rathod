interface SectionHeaderProps {
  title: string;
}

export default function SectionHeader(props: SectionHeaderProps) {
  const { title } = props;

  return (
    <h3 className="text-xl font-semibold text-foreground mb-4">{title}</h3>
  );
}
