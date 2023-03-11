import { BootstrapStart } from "./Common/Bootstrap/BootstrapStart"

export async function getBootstrapStarted() {
    return await new BootstrapStart().getStarted()
}