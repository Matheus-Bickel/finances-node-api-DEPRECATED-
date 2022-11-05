import { BoostrapStart } from "./App/Spents/Bootstrap/BootstrapStart";

export async function getBootstrapStarted() {
    return await new BoostrapStart().getStarted()
}