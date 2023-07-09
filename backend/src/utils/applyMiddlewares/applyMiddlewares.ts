import express from "express";

import getCorsMiddleware from "../../middlewares/getCorsMiddleware";
import {
  ApplyMiddlewares,
  ApplyMiddlewaresArguments,
} from "./applyMiddlewares.types";

const applyMiddlewares: ApplyMiddlewares = ({
  instance,
}: ApplyMiddlewaresArguments): void => {
  instance.use(getCorsMiddleware());
  instance.use(express.json());
};

export default applyMiddlewares;
