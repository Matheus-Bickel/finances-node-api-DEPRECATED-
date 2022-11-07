import { SpentsBootstrap } from "./SpentsBootstrap";

export class BoostrapStart {
    async getStarted(): Promise<void> {
        await new SpentsBootstrap().handler()
    }
}