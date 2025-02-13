import { MiscCloneProgrammer } from "../../../programmers/misc/MiscCloneProgrammer";

import { GenericTransformer } from "../../internal/GenericTransformer";

export namespace MiscCreateCloneTransformer {
    export const transform = GenericTransformer.factory("misc.createClone")(
        (project) => (modulo) => MiscCloneProgrammer.write(project)(modulo),
    );
}
