const ErrorMessage = ({ error }: any) => {
  return (
    <div className="text-rose-700" role='alert'>
      <p>
        {error && error.message
          ? error.message
          : 'Search Reuqest failed with an unknown issue.'}
      </p>
      <p>Please try again.</p>
    </div>
  );
};
export default ErrorMessage;
