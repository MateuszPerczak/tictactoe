import type { Express } from "express";
import type { Server } from "http";

export type CreateServerArguments = {
  port: number;
};

export type CreateServer = (
  argument: CreateServerArguments,
) => CreateServerOuput;

export type CreateServerOuput = {
  server: Express;
  httpServer: Server;
};
