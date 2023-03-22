import { SpentsBootstrap } from "../../App/Spents/Bootstrap/SpentsBootstrap"
import { DBBoostrap } from "../Db/DbBootstrap"
import { DotEnvBootstrap } from "../Dot-env/DotEnvBoostrap"

export class BootstrapStart {
    async getStarted(): Promise<void> {
        await new DBBoostrap().handler()
        await new DotEnvBootstrap().handler()
        await new SpentsBootstrap().handler()
    }
}