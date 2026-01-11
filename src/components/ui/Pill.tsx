interface PillProps {
  text: string;
}

export default function Pill(props: PillProps) {
  const { text } = props;

  return (
    <span className="px-3 py-1 text-sm font-medium text-blue-500 bg-blue-500/10 rounded-full">
      {text}
    </span>
  );
}
