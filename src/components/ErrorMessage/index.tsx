const ErrorMessage = ({ error }: any) => {
  if (error && error.message) {
    return <div>{error.message}</div>;
  }
  return <div>unknown issue</div>;
};
export default ErrorMessage;
