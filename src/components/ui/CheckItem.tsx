import { CheckCircleOutline } from "@/components/icons";

interface CheckItemProps {
  text: string;
}

export default function CheckItem(props: CheckItemProps) {
  const { text } = props;

  return (
    <li className="flex gap-3">
      <span className="shrink-0 mt-0.5">
        <CheckCircleOutline className="text-lg text-blue-500" />
      </span>
      <span>{text}</span>
    </li>
  );
}
