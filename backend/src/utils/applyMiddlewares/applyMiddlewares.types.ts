import type { Express } from "express";

export type ApplyMiddlewaresArguments = {
  instance: Express;
};

export type ApplyMiddlewares = (argument: ApplyMiddlewaresArguments) => void;
