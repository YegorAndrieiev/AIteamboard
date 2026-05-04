type Props = {
  title: string;
  onClick: () => void;
  disabled?: boolean;
};

export const Button = ({ title, onClick, disabled }: Props) => {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      style={{
        width: "100%",
        padding: "12px",
        background: disabled ? "#9ca3af" : "black",
        color: "white",
        borderRadius: "8px",
        cursor: "pointer",
        border: "none",
      }}
    >
      {title}
    </button>
  );
};