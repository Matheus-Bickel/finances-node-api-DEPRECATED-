import { Bootstrap } from "../../App/Spents/Bootstrap/Bootstrap";

import dotenv from 'dotenv';

export class DotEnvBootstrap implements Bootstrap {
    async handler(): Promise<void> {
        dotenv.config()
    }
}