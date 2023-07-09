import cors from "cors";

const getCorsMiddleware = () => {
  return cors();
};

export default getCorsMiddleware;
