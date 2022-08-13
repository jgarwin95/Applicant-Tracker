import ErrorOutlineIcon from "@mui/icons-material/ErrorOutline";

type ErrorStateProps = {
  message: string;
};

const ErrorState = ({ message }: ErrorStateProps) => {
  return (
    <div>
      <ErrorOutlineIcon />
      {message}
    </div>
  );
};

export default ErrorState;
