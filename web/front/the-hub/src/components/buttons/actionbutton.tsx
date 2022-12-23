import { Button } from "@mui/material";

export default function ActionButton({
  children,
  style,
}: {
  children: React.ReactNode;
  style?: React.CSSProperties;
}) {
  return (
    <Button
      className="h-12"
      style={{
        backgroundImage: "linear-gradient(45deg, #e74c3c, #8e44ad, #f1c40f)",
        color: "white",
        boxShadow: "0 3px 5px 2px rgba(255, 105, 135, .3)",
        cursor: "pointer",
        transition: "0.4s",
        backgroundSize: "200%",
        ...style,
      }}
    >
      <span style={{ padding: '0 40px', textShadow: "0 0 2px #0002" }}>{children}</span>
    </Button>
  );
}
