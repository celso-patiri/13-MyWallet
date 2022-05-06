import { FormError } from "../../global/types/forms.types";

type Props = {
  errorMessage?: FormError;
};

const ErrorMessage: React.FC<Props> = (props) => {
  const { errorMessage } = props;
  return (
    <p className="text-center text-sm font-bold text-orange-600">{errorMessage?.toString()}</p>
  );
};

export default ErrorMessage;
