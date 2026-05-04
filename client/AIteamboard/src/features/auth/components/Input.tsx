type Props = React.InputHTMLAttributes<HTMLInputElement>;

export const Input = (props: Props) => {
  return (
    <input
      {...props}
      style={{
        width: "100%",
        padding: "12px",
        borderRadius: "8px",
        border: "1px solid #d1d5db",
        marginBottom: "10px",
        outline: "none",
      }}
      autoComplete="new-password"
    />
  );
};