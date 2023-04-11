import express from "express";
import { getNodeData, getPrices, getBrubeckData } from "./manager";
import { cleanInput } from "@brubeckscan/common";
import type { Request, Response, NextFunction } from "express";
import { gatherCache } from "./cache";
import { octokit } from "./octokit";

const router = express.Router();

router.get(
  "/getBrubeckData",
  async (req: Request, res: Response, next: NextFunction) => {
    try {
      const data = await getBrubeckData();

      if (data) {
        return res.json(data);
      } else {
        next(Error("Error"));
      }
    } catch (e) {
      next(e);
    }
  }
);

router.get(
  "/getNodeData/:address",
  async (req: Request, res: Response, next: NextFunction) => {
    try {
      // Input validation
      const address = cleanInput(req.params.address);
      // Cache handle
      const cached = gatherCache.get(`nodeData/${address}`);
      if (cached) return res.json(cached);
      const data = await getNodeData(address);
      if (data) {
        gatherCache.set(`nodeData/${address}`, data, 60);
        return res.json(data);
      } else {
        next(Error("Error"));
      }
    } catch (e) {
      next(e);
    }
  }
);

router.get(
  "/getMultipleNodesData",
  async (req: Request, res: Response, next: NextFunction) => {
    try {
      const { nodes } = req.body;
      const promises = nodes.map((i: any) => getNodeData(i));
      const data = await Promise.all(promises);
      return res.json(data);
    } catch (e) {
      next(e);
    }
  }
);

router.get(
  "/getPrices",
  async (req: Request, res: Response, next: NextFunction) => {
    try {
      const data = await getPrices();
      return res.json(data);
    } catch (e) {
      next(e);
    }
  }
);

router.get(
  "/getAppVersion",
  async (req: Request, res: Response, next: NextFunction) => {
    try {
      const cached = gatherCache.get("appLatestRelease");
      if (cached) return res.json(cached);
      const latestRelease = await octokit.rest.repos.getLatestRelease({
        owner: "adamphivo",
        repo: "brubeckscan",
      });

      if (latestRelease) {
        gatherCache.set("appLatestRelease", latestRelease.data, 60 * 30);
        return res.json(latestRelease.data);
      }
    } catch (e) {
      next(e);
    }
  }
);

router.get(
  "/clearCache",
  async (req: Request, res: Response, next: NextFunction) => {
    const keys = gatherCache.keys();
    gatherCache.del(keys);
    return res.send();
  }
);

export { router };
