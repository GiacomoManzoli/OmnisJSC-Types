# Omnis Studio JavaScript Client types

TypeScript declarations for the JavaScript framework shipped with Omnis Studio.
The package is declaration-only: it adds no JavaScript and does not replace the
Omnis runtime bundles loaded by the generated HTML page.

The API is based on `JavaScriptSDK.pdf`, JavaScript documentation pages 35-154,
and checked against the Omnis Studio 12.0 revision 44354 scripts.

## Installation

```sh
npm install omnis-jsc-types
```

The declarations are global because Omnis exposes the framework globally. Add
the package to `compilerOptions.types`:

```json
{
    "compilerOptions": {
        "types": ["omnis-jsc-types"]
    }
}
```

This is a declarations-only package, so it should not be imported as a runtime
side-effect module. If changing `tsconfig.json` is not possible, add this line
to a project-local `.d.ts` file instead:

```ts
/// <reference types="omnis-jsc-types" />
```

After that, a custom control can extend `ctrl_base` directly:

```ts
export class ctrl_mycontrol extends ctrl_base {
    init_ctrl_inst(form: omnis_form, elem: HTMLElement, rowCtrl: ctrl_base | null, rowNumber: number): boolean {
        super.init_ctrl_inst(form, elem, rowCtrl, rowNumber);
        this.getClientElem().addEventListener("click", this.mEventFunction);
        return false;
    }

    handleEvent(event: Event): void {
        if (event.type === "click" && this.canSendEvent(eBaseEvent.evClick)) {
            this.sendEvent(eBaseEvent.evClick);
        }
    }
}
```

## Covered runtime areas

- `ctrl_base`, control lifecycle hooks, data access, events, properties and themes;
- `omnis_form`, `omnis_inst`, `omnis_date`, `omnis_list`, `omnis_cols`, list columns and rows;
- base enumerators such as `eBaseProperties`, `eBaseEvent`, `eOmnisDataTypes`, `eDateParts` and `eDoMethodFlags`;
- global helpers `jOmnis`, `jStyles`, `jIcons`, the static `Theme` helper, `OMColor` and `jOmnisEffects`;
- `JOmnisTheme` instances returned by `ctrl_base.getTheme()`;
- the Studio 12 icon and theme helpers observed in the revision 44354 bundles.

The deprecated color-pair functions remain declared so older controls can be
migrated incrementally. New controls should prefer `Theme.getColorString()` and
`Theme.getTextColorString()`.


## Verification

```sh
npm run typecheck
npm run pack:check
```

`tests/smoke.ts` exercises the main inheritance, list, form, event, date, theme
and stylesheet APIs without executing an Omnis browser runtime.
