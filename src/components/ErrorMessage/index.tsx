const ErrorMessage = ({ error }: any) => {
  return (
    <div className="text-rose-700" aria-live="polite">
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
