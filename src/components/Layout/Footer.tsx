import { Link } from "react-router-dom";
import { Button } from "../ui";

export const Footer = () => {
  return (
    <div className="flex justify-center items-center border-t gap-0">
      <div className="font-semibold">Creator 👉</div>
      <Link to="https://github.com/deedee1122" target="_blank">
        <Button variant="link">deedee1122</Button>
      </Link>
    </div>
  );
};
