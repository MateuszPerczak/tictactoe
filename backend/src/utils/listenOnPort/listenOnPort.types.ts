import type { Express } from "express";
import type { Server } from "http";

export type ListenOnPortArguments = {
  instance: Express;
  port: number;
  callback?: () => void;
};

export type ListenOnPort = (argument: ListenOnPortArguments) => Server;
