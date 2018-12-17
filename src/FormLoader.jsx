const FormLoader = ({ isLoading }) => {
  if (!isLoading) {
    return null;
  }
  return (
    <div className="login-form__loader">
      <div className="loader" />
    </div>
  );
};

export default FormLoader;
