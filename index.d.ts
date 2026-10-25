/**
 * TypeScript declarations for the Omnis Studio JavaScript Client framework.
 *
 * These declarations describe the global objects provided by Omnis' core
 * JavaScript bundles. They do not provide a runtime implementation and must
 * be loaded after the Omnis scripts by the generated HTML page.
 *
 * The public API is based on JavaScriptSDK.pdf (JavaScript section, pp. 35-154)
 * and checked against the Omnis Studio 12.0 revision 44354 bundles.
 */

export {};

declare global {
    /** A value exchanged with Omnis' Variant/Var type. */
    type OmnisValue = any;

    /** An Omnis property or event identifier. Built-ins are numeric; custom values may be strings. */
    type OmnisProperty = number | string;
    type OmnisEventCode = number | string;
    /** Backwards-compatible names used by earlier project-local declarations. */
    type OmnisPropName = OmnisProperty;
    type OmnisEventName = OmnisEventCode;
    type eOmnisDataType = number;
    type eOmnisDataSubType = number;
    type OmnisColumn = number | string;
    type OmnisRow = number | number[];
    type OmnisRGBInt = number;

    /** The values passed to updateCtrl(), update(), Form.getData() and Form.setData(). */
    type OmnisDataWhat =
        | ""
        | "#COL"
        | "#1COL"
        | "#LSEL"
        | "#LSEL_ALL"
        | "#L"
        | "#LCNT"
        | "#CCNT"
        | "#NCELL";

    type DatanameChangedWhat = "" | "#COL" | "#LSEL" | "#L" | "#LSEL_ALL" | "#NCELL";
    type OmnisFormat = "s" | "sz" | "a" | string;

    interface OmnisPoint {
        x: number;
        y: number;
    }

    interface OmnisRectSize {
        width: number;
        height: number;
    }

    interface OmnisWindowScroll {
        XOffset: number;
        YOffset: number;
    }

    interface OmnisIconSize {
        width: number;
        height: number;
        viewBox?: string;
    }

    interface OmnisSwipeEndInfo {
        /** The element on which the swipe listener was installed. */
        element: HTMLElement;
        /** The final horizontal offset. */
        offset: number;
        cancelled: boolean;
        /** Runtime builds before Studio 12 may expose this alias. */
        elem?: HTMLElement;
    }

    interface OmnisDialogButton {
        name: string;
        primary?: boolean;
        event?: OmnisEventCode | null;
        accelerator?: OmnisValue;
        [key: string]: OmnisValue;
    }

    /** Handle returned by jOmnis.addStyleSheet(). */
    type OmnisStyleSheetHandle = number | CSSStyleSheet;

    interface OmnisStyleSheetListener {
        styleSheetsUpdated(): void;
    }

    interface OmnisThemeColors {
        readonly default: -1;
        readonly none: -2;
        readonly transparent: -3;
        readonly neutral: -2147483464;
        readonly neutralText: -2147483463;
        readonly primary: -2147483462;
        readonly primaryDark: -2147483461;
        readonly primaryLight: -2147483460;
        readonly primaryText: -2147483459;
        readonly primaryDarkText: -2147483458;
        readonly primaryLightText: -2147483457;
        readonly secondary: -2147483456;
        readonly secondaryDark: -2147483455;
        readonly secondaryLight: -2147483454;
        readonly secondaryText: -2147483453;
        readonly secondaryDarkText: -2147483452;
        readonly secondaryLightText: -2147483451;
        readonly error: -2147483450;
        readonly errorText: -2147483449;
        readonly background: -2147483448;
        readonly backgroundText: -2147483447;
        readonly surface: -2147483446;
        readonly surfaceText: -2147483445;
        readonly focusedRow: -2147483444;
        readonly focusedRowText: -2147483443;
        readonly border: -2147483442;
        readonly dialog: -2147483441;
        readonly dialogText: -2147483440;
        readonly dialogTitle: -2147483439;
        readonly dialogTitleText: -2147483438;
        readonly disabled: -2147483437;
        readonly disabledText: -2147483436;
        readonly focusIndicator: -2147483435;
        readonly [name: string]: number;
    }

    interface OmnisThemeColorNames {
        readonly none: "none";
        readonly transparent: "transparent";
        readonly neutral: "neutral";
        readonly neutralText: "neutralText";
        readonly primary: "primary";
        readonly primaryDark: "primaryDark";
        readonly primaryLight: "primaryLight";
        readonly primaryText: "primaryText";
        readonly primaryDarkText: "primaryDarkText";
        readonly primaryLightText: "primaryLightText";
        readonly secondary: "secondary";
        readonly secondaryDark: "secondaryDark";
        readonly secondaryLight: "secondaryLight";
        readonly secondaryText: "secondaryText";
        readonly secondaryDarkText: "secondaryDarkText";
        readonly secondaryLightText: "secondaryLightText";
        readonly error: "error";
        readonly errorText: "errorText";
        readonly background: "background";
        readonly backgroundText: "backgroundText";
        readonly surface: "surface";
        readonly surfaceText: "surfaceText";
        readonly focusedRow: "focusedRow";
        readonly focusedRowText: "focusedRowText";
        readonly border: "border";
        readonly dialog: "dialog";
        readonly dialogText: "dialogText";
        readonly dialogTitle: "dialogTitle";
        readonly dialogTitleText: "dialogTitleText";
        readonly disabled: "disabled";
        readonly disabledText: "disabledText";
        readonly focusIndicator: "focusIndicator";
        readonly [name: string]: string;
    }

    interface EAnums {
        readonly priv: -1;
        readonly none: 0;
        readonly $cfield: 89;
        readonly $cinst: 77;
        readonly $cwind: 66;
        readonly [name: string]: number;
    }

    interface EBaseBorder {
        readonly None: 0;
        readonly Plain: 1;
        readonly Inset: 2;
        readonly Embossed: 3;
        readonly SingleInset: 9;
        readonly SingleEmbossed: 10;
        readonly Default: 100;
        readonly [name: string]: number;
    }

    interface EBaseEvent {
        readonly evNone: 0;
        readonly evBefore: -3;
        readonly evAfter: -4;
        readonly evClick: -5;
        readonly evDoubleClick: -6;
        /** Historical typo retained in the PDF documentation. */
        readonly vDoubleClick: -6;
        readonly evDrag: -13;
        readonly evDrop: -18;
        readonly evHidden: -40;
        readonly evShown: -41;
        readonly evTabSelected: -43;
        readonly evWillDrop: -50;
        readonly evCanDrop: -51;
        readonly evCellChanged: -53;
        readonly evOpenContextMenu: -58;
        readonly evHeaderClick: -68;
        readonly evExecuteContextMenu: -90;
        readonly evHeadedListDisplayOrderChanged: -91;
        readonly evUserChangedPane: -94;
        readonly evFormToTop: -77;
        readonly evDragFinished: -83;
        readonly evScreenOrientationChanged: -89;
        readonly evSubFormToTop: -92;
        readonly evAnimationsComplete: -93;
        readonly evDragBorder: -95;
        readonly evLayoutChanged: -106;
        readonly evWillShow: -111;
        readonly evWillHide: -112;
        readonly evSubformLoaded: -116;
        readonly evBorderIconClicked: -120;
        readonly [name: string]: number;
    }

    interface EBaseProperties {
        readonly name: -1;
        readonly ident: -25;
        readonly count: -53;
        readonly iconid: -250;
        readonly tooltip: -262;
        readonly hiliteline: -278;
        readonly errortext: -363;
        readonly title: -400;
        readonly top: -401;
        readonly left: -402;
        readonly height: -403;
        readonly width: -404;
        readonly horzscroll: -409;
        readonly vertscroll: -410;
        readonly backcolor: -416;
        readonly backpattern: -417;
        readonly dragborder: -438;
        readonly order: -440;
        /** Revision 44354 uses -443; older PDF editions list -433. */
        readonly dataname: -443;
        readonly text: -444;
        readonly visible: -446;
        readonly uppercase: -453;
        readonly negallowed: -454;
        readonly zeroempty: -455;
        readonly multipleselect: -463;
        readonly forecolor: -464;
        readonly fontsize: -466;
        readonly fontstyle: -467;
        readonly align: -468;
        readonly linestyle: -469;
        readonly edgefloat: -470;
        readonly container: -473;
        readonly effect: -494;
        readonly hscroll: -498;
        readonly vscroll: -499;
        readonly enabled: -506;
        readonly dragmode: -508;
        readonly dropmode: -509;
        readonly active: -514;
        readonly checked: -571;
        readonly fontname: -690;
        readonly bordercolor: -720;
        readonly textcolor: -721;
        readonly inputmask: -725;
        readonly contextmenu: -760;
        readonly fieldstyle: -887;
        readonly vscrolltips: -905;
        readonly events: -956;
        readonly okkeyobject: -980;
        readonly cancelkeyobject: -985;
        readonly userinfo: -1091;
        readonly disabledefaultcontextmenu: -1117;
        readonly disablesystemfocus: -1130;
        readonly alpha: -1200;
        readonly screensize: -1201;
        readonly commandid: -1204;
        readonly remotemenu: -1205;
        readonly backalpha: -1227;
        readonly beginanimations: -1232;
        readonly commitanimations: -1233;
        readonly vertcentertext: -1243;
        readonly jsdateformat: -1250;
        readonly jsdateformatcustom: -1251;
        readonly borderradius: -1252;
        readonly autoscroll: -1253;
        readonly resizemode: -1255;
        readonly jsnumberformat: -1256;
        readonly cssclassname: -1257;
        readonly sqlobject: -1265;
        readonly errorline: -1303;
        readonly errortextpos: -1305;
        readonly textishtml: "$textishtml";
        readonly pagesize: -1307;
        readonly visibleinbreakpoint: -1324;
        readonly autocomplete: "$autocomplete";
        readonly autocapitalize: "$autocapitalize";
        readonly autocorrect: "$autocorrect";
        readonly preventlayoutanimation: -1341;
        readonly arialabel: -1361;
        readonly arialabelledby: -1362;
        readonly ariadescribedby: -1363;
        readonly ischeckable: -1365;
        readonly keyboardchangesline: "$keyboardchangesline";
        readonly defaultdisabledappearance: -1369;
        readonly pagerpage: -1377;
        readonly sidepanel: -1416;
        readonly sidepanelmode: -1417;
        readonly hasshadow: -1431;
        readonly nexttabobject: -1440;
        readonly horzPadding: "$horzpadding";
        readonly vertPadding: "$vertpadding";
        readonly defaultinactiveappearance: -1463;
        readonly removefromtaborder: -1466;
        readonly datePickerOptions: "$datepickeroptions";
        readonly enterToDoubleClick: "$entertodoubleclick";
        readonly label: -1480;
        readonly labeltextcolor: -1481;
        readonly labelhottextcolor: -1482;
        readonly labelfontsize: -1483;
        readonly labelposition: -1484;
        readonly labeliscontenttip: -1485;
        readonly vertAlign: "$vertalign";
        readonly splitIconAndText: "$spliticonandtext";
        readonly iconTextSpacing: "$icontextspacing";
        readonly iconColor: -1502;
        readonly reorderMode: "$reordermode";
        readonly rightclicksetsline: "$rightclicksetsline";
        readonly scrollShadowWidth: -1530;
        readonly scrollShadowColor: -1531;
        readonly bordericonstyle: -1455;
        readonly [name: string]: number | string;
    }

    interface EClientPlatforms {
        readonly Unknown: -1;
        readonly Windows: 0;
        readonly macOS: 1;
        readonly Linux: 2;
        readonly iOS: 3;
        readonly Android: 4;
        readonly [name: string]: number;
    }

    interface EDateParts {
        readonly kYear: 1;
        readonly kMonth: 2;
        readonly kWeek: 3;
        readonly kDayOfYear: 4;
        readonly kQuarter: 5;
        readonly kMonthofQuarter: 6;
        readonly kWeekofQuarter: 7;
        readonly kDayofQuarter: 8;
        readonly kWeekofMonth: 9;
        readonly kDay: 10;
        readonly kDayOfWeek: 11;
        readonly kHour: 19;
        readonly kMinute: 20;
        readonly kSecond: 21;
        readonly kCentiSecond: 22;
        readonly [name: string]: number;
    }

    interface EDoMethodFlags {
        readonly completionEvent: 1;
        readonly clientOnly: 2;
        readonly noOverlay: 4;
        readonly noLog: 8;
        readonly withPromise: 16;
        readonly logWithMessage: 32;
        readonly logWithMessageAndDisconnect: 64;
        readonly preventRecordingUpdates: 128;
        readonly [name: string]: number;
    }

    interface EOmnisDataSubTypes {
        readonly default: 0;
        readonly intShort: 32;
        readonly int32: 0;
        readonly int64: 64;
        readonly numberShort: 32;
        readonly numberRealDps: 31;
        readonly characterSimple: 0;
        readonly characterNational: 1;
        readonly date1900: 0;
        readonly date1980: 1;
        readonly date2000: 2;
        readonly dateTime1900: 3;
        readonly dateTime1980: 4;
        readonly dateTime2000: 5;
        readonly time: 6;
        readonly dateTimeC: 7;
        readonly timestamp: 1000;
        readonly dpFdtimedefault: 4;
        readonly listRow: 1;
        readonly [name: string]: number;
    }

    interface EOmnisDataTypes {
        readonly fftNone: 20;
        readonly fftCharacter: 21;
        readonly fftBoolean: 22;
        readonly fftDate: 23;
        readonly fftSequence: 24;
        readonly fftNumber: 25;
        readonly fftInteger: 26;
        readonly fftPicture: 27;
        readonly fftBinary: 28;
        readonly fftList: 29;
        readonly fftRdef: 30;
        readonly fftCrb: 31;
        readonly fftFieldname: 32;
        readonly fftItemref: 33;
        readonly fftItemRef: 33;
        readonly fftCalc: 34;
        readonly fftConstant: 35;
        readonly fftRow: 36;
        readonly fftObject: 37;
        readonly fftObjref: 38;
        readonly fftListCatalog: 129;
        readonly fftRowCatalog: 229;
        readonly [name: string]: number;
    }

    interface EListDeleteRow {
        readonly Current: 0;
        readonly Selected: -1;
        readonly Deselected: -2;
        readonly [name: string]: number;
    }

    interface EListProperties {
        readonly rownumber: -358;
        readonly objtype: -441;
        readonly selected: -507;
        readonly objsubtype: -600;
        readonly objsublen: -601;
        readonly total: -615;
        readonly average: -616;
        readonly minimum: -617;
        readonly maximum: -618;
        readonly linecount: -620;
        readonly linemax: -621;
        readonly line: -622;
        readonly colcount: -623;
        readonly coltype: -630;
        readonly colsubtype: -631;
        readonly colsublen: -632;
        readonly [name: string]: number;
    }

    interface EDefaultColorNames {
        readonly BACKGROUND: "background";
        readonly TEXT: "text";
        readonly BORDER: "border";
        readonly SYSTEM_FOCUS: "SYSTEM_FOCUS";
        readonly [name: string]: string;
    }

    /** Base control for every Omnis JavaScript control. */
    class ctrl_base {
        static readonly DEFAULT_COLOR_NAMES: EDefaultColorNames;

        constructor();

        /** Frame element and client element supplied by the framework. */
        elem: HTMLElement;
        clientElem: HTMLElement;
        form: omnis_form;
        superclass: ctrl_base;
        rowCtrl: ctrl_base | null;
        rowNumber: number;
        objName: string;
        objNumber: number;
        dataName: string;
        dataIndex: number;
        mData: OmnisValue;
        mEventFunction: (event: Event) => void;
        usesTouch: boolean;
        lastTouch: number;
        touchStartPos: OmnisPoint;
        allowDefaultDropHandling: boolean;
        baseClassName: string;
        DefaultColors: Record<string, OmnisRGBInt>;
        mAcceptsReturn: boolean;
        mAcceptsEscape: boolean;

        init_class_inst(): void;
        init_ctrl_inst(form: omnis_form, elem: HTMLElement, rowCtrl: ctrl_base | null, rowNumber: number): boolean;
        delete_class_inst(): void;
        updateCtrl(what?: DatanameChangedWhat, row?: OmnisRow, col?: OmnisColumn, mustUpdate?: boolean): void;
        handleEvent(event: Event): void | boolean;
        fillChanged(): void;
        fontChanged(): void;
        enabledChanged(): void;
        activeChanged(): void;
        getTrueVisibility(childControl?: ctrl_base | null): boolean;
        visibilityChanged(): boolean;
        formBuilt(): void;
        getErrorBorderDiv(): HTMLElement;

        getCanAssign(property: OmnisProperty): boolean;
        getProperty(property: OmnisProperty): OmnisValue;
        setProperty(property: OmnisProperty, value: OmnisValue): boolean;
        doSetProperty(property: OmnisProperty, value: OmnisValue): boolean;
        setPropCli(property: OmnisProperty, value: OmnisValue): boolean;
        eventParamsAdd(name: string, value: OmnisValue): void;
        canSendEvent(event: OmnisEventCode): boolean;
        sendEvent(event: OmnisEventCode): void;
        focus(): void;
        getClientElem(): HTMLElement;
        getData(
            what?: OmnisDataWhat | null,
            row?: number | null,
            col?: OmnisColumn | null,
            alternateDataIndex?: number | null,
            format?: OmnisFormat | null,
            formatString?: string | null
        ): OmnisValue;
        setData(
            value: OmnisValue,
            what?: OmnisDataWhat | null,
            row?: number | null,
            col?: OmnisColumn | null,
            format?: OmnisFormat | null,
            formatString?: string | null,
            updateThis?: boolean,
            ignorePager?: boolean
        ): boolean;
        getDisplayFormat(forceNumber?: boolean): string;
        getIconUrlFromImgSrc(element: HTMLImageElement): string;
        getIconUrlFromStyleUrl(element: HTMLElement): string;
        getTextWidthDiv(): HTMLDivElement;
        removeTextWidthDiv(element: HTMLDivElement): void;
        isEnabled(): boolean;
        isActive(): boolean;
        removeFromTabOrder(): void;
        setupIcon(url: string): string;
        update(what?: OmnisDataWhat | null, row?: OmnisRow | null, col?: OmnisColumn | null): void;
        getTheme(): JOmnisTheme;
        resolveDefaultColor(color: OmnisRGBInt, attribute: string): OmnisRGBInt;
        setPropertyBorder(element: HTMLElement, value: number, defaultValue?: number): boolean;
        alphaFromCssColor(cssColor: string): number;
        callMethod(methodName: string, ...args: OmnisValue[]): OmnisValue;
        callMethodEx(methodName: string, flags: number, ...args: OmnisValue[]): OmnisValue;
        getContainerControl(): ctrl_base | null;
        styleSheetsUpdated?(): void;
    }

    /** The client-side wrapper for an Omnis form instance. */
    class omnis_form {
        inst: omnis_inst;
        elem: HTMLElement;
        serverElem: HTMLElement;
        ident: number;
        number: number;

        beginAnimations(duration: number, curve: number): void;
        callMethod(methodName: string, ...args: OmnisValue[]): OmnisValue;
        callMethodEx(methodName: string, flags: number, ...args: OmnisValue[]): OmnisValue;
        commitAnimations(): void;
        findChild(objectNumber: number, rowNumber: number): ctrl_base | null;
        findChildByName(objectName: string): ctrl_base | null;
        getData(
            dataIndex: number,
            what?: OmnisDataWhat | null,
            row?: number | null,
            col?: OmnisColumn | null,
            format?: OmnisFormat | null,
            formatString?: string | null
        ): OmnisValue;
        getDataIndex(dataName: string, control?: ctrl_base | null, mapControlToData?: boolean): number;
        getNextPrevTabObject(startControl: ctrl_base, isPrevious: boolean, noWrap?: boolean): ctrl_base | null;
        registerForFormBuilt(control: ctrl_base): void;
        setData(
            dataIndex: number,
            value: OmnisValue,
            what?: OmnisDataWhat | null,
            row?: number | null,
            col?: OmnisColumn | null,
            canRecord?: boolean,
            format?: OmnisFormat | null,
            formatString?: string | null
        ): boolean;
    }

    /** The client-side wrapper for an Omnis instance. */
    class omnis_inst {
        [key: string]: OmnisValue;
    }

    class omnis_date {
        dtY: number;
        dtM: number;
        dtD: number;
        dtH: number;
        dtN: number;
        dtS: number;
        dtG: number;

        constructor(value?: Date | omnis_date | null);
        equals(other: omnis_date): boolean;
        toJavaScriptDate(): Date;
        add(part: number, amount: number): omnis_date;
        getFormat(): string;
        static getHasTime(value: omnis_date): boolean;
        static isOmnisDate(value: OmnisValue): value is omnis_date;
    }

    type OmnisColumnDefinition = readonly [name: string, instanceVariable: string];

    /** Client-side representation of an Omnis list or row variable. */
    class omnis_list {
        constructor(rawList: omnis_raw_list | null);
        getChar(column: OmnisColumn, rowNumber: number, zeroEmpty: boolean): string;
        getData(column: OmnisColumn, rowNumber: number): OmnisValue;
        setData(column: OmnisColumn, rowNumber: number, value: OmnisValue): boolean;
        search(
            column: OmnisColumn,
            searchValue: OmnisValue,
            setCurrentRow: boolean,
            selectMatches: boolean,
            deselectNonMatches: boolean
        ): number;
        getRowSelectionState(rowNumber: number): 0 | 1;
        setRowSelectionState(rowNumber: number, selectionState: 0 | 1): boolean;
        setRowSelectionStateAllRows(selectionState: 0 | 1): void;
        getCurrentRow(): number;
        setCurrentRow(rowNumber: number): boolean;
        getRowCount(): number;
        getColumnCount(): number;
        addRow(beforeRowNumber: number, columnCount: number): number;
        deleteRows(actionOrRow: number): number;
        findColumn(column: OmnisColumn, beginsWith?: boolean): number;
        getRowArray(rowNumber: number): OmnisValue[];
        getListData(): omnis_raw_list;

        /** Runtime helpers available on newer Studio releases. */
        static isGrouped(value: OmnisValue): boolean;
        static convertJavaScriptArrayToOmnisList(value: OmnisValue[]): omnis_list;
        static convertJavaScriptObjectToOmnisRow(value: Record<string, OmnisValue>): omnis_list_row;
        static convertOmnisRowToJavaScriptObject(value: omnis_list_row): Record<string, OmnisValue>;
    }

    /** Low-level list payload. Use omnis_list for normal application code. */
    class omnis_raw_list {
        readonly __list?: omnis_list;
        lstRow: 0 | 1;
        lstDef: OmnisValue[];
        lstData: OmnisValue[];
        lstLSEL: Array<0 | 1>;
        lstL: number;
        checkWrapper?(): void;
        $cols?(): omnis_cols;
    }

    /** The $cols wrapper for an Omnis list. */
    class omnis_cols {
        constructor(rawList: omnis_raw_list);
        $add(name: string, type: number, subType: number, length: number): omnis_list_col;
        $add(definition: OmnisColumnDefinition): omnis_list_col;
        $count(): number;
        getCanAssign(column: OmnisColumn, property: number): boolean;
        getProperty(column: OmnisColumn, property: number): OmnisValue;
        getValue(column: OmnisColumn): omnis_list_col;
        setPropCli(column: OmnisColumn, property: number, value: OmnisValue): boolean;
        $addafter(
            afterColumn: number | omnis_list_col,
            name: string,
            type: number,
            subType: number,
            length: number
        ): omnis_list_col;
        $addafter(definition: OmnisColumnDefinition, afterColumn: number | omnis_list_col): omnis_list_col;
        $addbefore(
            beforeColumn: number | omnis_list_col,
            name: string,
            type: number,
            subType: number,
            length: number
        ): omnis_list_col;
        $addbefore(definition: OmnisColumnDefinition, beforeColumn: number | omnis_list_col): omnis_list_col;
        $remove(column: number | omnis_list_col): void;
    }

    /** A single column in an Omnis list. */
    class omnis_list_col {
        $clear(): boolean;
        $count(selectedOnly?: boolean): number;
        $removeduplicates(sortNow?: boolean, ignoreCase?: boolean): number;
        $selectduplicates(sortNow?: boolean, ignoreCase?: boolean): number;
    }

    /** Runtime row wrapper used by the list implementation. */
    class omnis_list_row {
        getValue(...path: OmnisValue[]): OmnisValue;
        setValue(...pathAndValue: OmnisValue[]): boolean;
        xaddValue(...pathAndValue: OmnisValue[]): OmnisValue;
        xsubValue(...pathAndValue: OmnisValue[]): OmnisValue;
        xmulValue(...pathAndValue: OmnisValue[]): OmnisValue;
        xdivValue(...pathAndValue: OmnisValue[]): OmnisValue;
        static ParseRow(value: OmnisValue): omnis_list_row | null;
    }

    interface jStyles {
        setElem(element: Element): void;
        get(styleName: string): string;
        getInt(styleName: string): number;
        done(): void;
    }

    var jStyles: jStyles;
    var eAnums: EAnums;
    var eBaseBorder: EBaseBorder;
    var eBaseEvent: EBaseEvent;
    var eBaseProperties: EBaseProperties;
    var eClientPlatforms: EClientPlatforms;
    var eDateParts: EDateParts;
    var eDoMethodFlags: EDoMethodFlags;
    var eOmnisDataSubTypes: EOmnisDataSubTypes;
    var eOmnisDataTypes: EOmnisDataTypes;
    var eListDeleteRow: EListDeleteRow;
    var eListProperties: EListProperties;
    var INVALID_LIST_OPERATION: -1;

    class JOmnisIcons {
        readonly mSvgTag: string;
        readonly noInputElem: HTMLElement;
        getCheckedImage(normalUrl: string): string;
        getIconBackSize(iconUrl: string): string;
        getIconSize(iconUrl: string, cssStyle: boolean, isSvg?: boolean | null): string | OmnisIconSize;
        replaceOrAddToElem(
            parentElem: HTMLElement,
            iconUrl: string,
            loadFunc?: (() => void) | null,
            sizeObj?: OmnisIconSize | null,
            alwaysCreate?: boolean,
            needWrapper?: boolean
        ): HTMLElement | null;
        iconUrl(imageElem: HTMLElement): string | null;
        setImageUrl(imageElem: HTMLElement, imageUrl: string): void;
        /** Runtime icon helpers used by Omnis' own controls. */
        isIcon(iconUrl: string): boolean;
        isSVG(iconUrl: string): boolean;
        selectIcon(iconUrl: string): string;
        getHtml(iconUrl: string, ...options: OmnisValue[]): string;
        getEventElement(element: HTMLElement): HTMLElement | null;
        setWidthHeight(element: HTMLElement, size: OmnisIconSize): void;
        getElemWidth(element: HTMLElement): number;
        getElemHeight(element: HTMLElement): number;
    }

    var jIcons: JOmnisIcons;

    class JOmnisTheme {
        readonly COLORS: OmnisThemeColors;
        readonly COLOR_NAMES: OmnisThemeColorNames;
        getColorString(color: OmnisRGBInt, defaultColor?: OmnisRGBInt, alpha?: number): string;
        getTextColorString(textColor: OmnisRGBInt, onColor: OmnisRGBInt, defaultColor: OmnisRGBInt): string;
        getColorRGB(color: OmnisRGBInt, defaultColor?: OmnisRGBInt): OmnisRGBInt;
        getCSSClass?(): string;
        /** Static form used by the global Theme helper. */
        static readonly COLORS: OmnisThemeColors;
        static readonly COLOR_NAMES: OmnisThemeColorNames;
        static getColorString(color: OmnisRGBInt, defaultColor?: OmnisRGBInt, alpha?: number): string;
        static getTextColorString(textColor: OmnisRGBInt, onColor: OmnisRGBInt, defaultColor: OmnisRGBInt): string;
        static getColorRGB(color: OmnisRGBInt, defaultColor?: OmnisRGBInt): OmnisRGBInt;
        static SetThemedIconColor(element: HTMLElement, color: string): void;
    }

    /** Global static theme helper; form instances expose a JOmnisTheme instance. */
    var Theme: typeof JOmnisTheme;

    class JOmnisEffects {
        readonly FOCUS_HELPER_CLASS: string;
        addRippleToElem(
            element: HTMLElement,
            theme: JOmnisTheme,
            hasContainer?: boolean,
            elementColor?: OmnisRGBInt | null,
            keys?: string[],
            keyElement?: HTMLElement | null,
            directColor?: OmnisRGBInt | null
        ): OmnisValue;
        setRippleColor(
            element: HTMLElement,
            theme: JOmnisTheme,
            elementColor: OmnisRGBInt,
            directColor?: OmnisRGBInt | null
        ): void;
        addFocusClass(element: HTMLElement): void;
        removeFocusClass(element: HTMLElement): void;
    }

    var jOmnisEffects: JOmnisEffects;

    type OmnisSwipeStartHandler = (event: TouchEvent | MouseEvent | Event) => boolean;
    type OmnisSwipeMoveHandler = (offsetX: number, animationDuration: number) => void;
    type OmnisSwipeEndHandler = (info: OmnisSwipeEndInfo) => void;

    class JOmnis {
        readonly clientPlatform: number;

        addClass(element: HTMLElement, className: string | string[], suffix?: string): void;
        removeClass(element: HTMLElement, className: string | string[], suffix?: string): void;
        hasClass(element: Element, className: string): boolean;
        addStyleSheet(cssText: string): OmnisStyleSheetHandle;
        removeStyleSheet(styleSheet: OmnisStyleSheetHandle): void;
        registerStyleSheetObject(object: OmnisStyleSheetListener): void;
        unregisterStyleSheetObject(object: OmnisStyleSheetListener): void;
        loadResource(url: string): Promise<void>;
        loadResources(urls: string[], onSuccess: () => void, onFailure: (error?: OmnisValue) => void): void;
        addSwipeListener(
            element: HTMLElement,
            startTouchOK: OmnisSwipeStartHandler,
            moveHandler: OmnisSwipeMoveHandler,
            endListener: OmnisSwipeEndHandler,
            animationDuration: number
        ): void;
        animate(
            element: HTMLElement,
            properties: Partial<CSSStyleDeclaration> | Record<string, string | number>,
            time: number,
            transitionEndedHandler?: () => void
        ): void;
        clearAnimations(element: HTMLElement, transitionEndedHandler?: () => void): void;

        /** Deprecated color-pair helpers retained for compatibility. */
        applyAlphaValueToColorPair(colorPair: string, alpha: number): string;
        applyColorValueToColorPair(colorPair: string, color: OmnisRGBInt): string;
        extractColor(colorPair: string): string;
        extractSolidColor(colorPair: string): string;
        getColorString(rgb: OmnisRGBInt): string;
        getColorStringWithAlpha(rgb: OmnisRGBInt, alpha: number): string;
        getColorStringForElement(parentElem: HTMLElement, className: string, attribute: string, colorPair: boolean): string;

        disableTextSelection(element: HTMLElement, reEnable: boolean, reEnableValue?: string): string;
        getAttributeAsBool(element: Element, attributeName: string, defaultValue: OmnisValue): boolean;
        getAttributeList(element: Element, attributeName: string, primarySeparator?: string): OmnisValue[];
        getClientLocale(): string;
        cToChar(value: OmnisValue): string;
        rgbFromCssColor(cssColor: string): OmnisRGBInt;
        getEventCurrentTarget(event: Event): HTMLElement | null;
        getEventTarget(event: Event): HTMLElement | null;
        getOmnisForm(instanceIndex: number, formIndex: number): omnis_form | null;
        getOmnisFormControl(instanceIndex: number, formIndex: number, objectNumber: number, objectRowNumber: number): ctrl_base | null;
        getOmnisHeight(element: HTMLElement, clientArea: boolean): number;
        getOmnisInst(instanceIndex: number): omnis_inst | null;
        getOmnisLeft(element: HTMLElement): number;
        getOmnisTop(element: HTMLElement): number;
        getOmnisWidth(element: HTMLElement, clientArea: boolean): number;
        getStyle(element: HTMLElement, styleName: string, parseIntValue: boolean): string | number;
        getTotalHeight(element: HTMLElement): number;
        getTotalWidth(element: HTMLElement): number;
        getWindowClientScroll(): OmnisWindowScroll;
        getWindowClientSize(): OmnisRectSize;
        inAppWrapper(): boolean;
        okMessage(title: string, message: string): void;
        showDialogEx(
            title: string,
            message: string,
            type: "error" | "warning" | "success" | "prompt" | "message" | "query" | string,
            width: number | null,
            height: number | null,
            autoHide: number | null,
            atCursor: boolean,
            modal: boolean,
            hasClose: boolean,
            buttonList: OmnisDialogButton[],
            form: omnis_form | null
        ): void;
        parseInteger(value: string): number;
        setBackgroundFromOmnisDefinition(element: HTMLElement, attributeName?: string, destination?: HTMLElement): void;
        setBorderRadius(element: HTMLElement, value: string): void;
        setOmnisHeight(element: HTMLElement, height: number): void;
        setOmnisLeft(element: HTMLElement, left: number): void;
        setOmnisRect(element: HTMLElement, left: number, top: number, width: number, height: number): void;
        setOmnisTop(element: HTMLElement, top: number): void;
        setOmnisWidth(element: HTMLElement, width: number): void;
        setPropertyBackground(element: HTMLElement, property: OmnisProperty, value: number): boolean;
        stopEventNow(event: Event): void;
        setFontSize(element: HTMLElement, size: number): void;
        getElemPosRelativeToAncestor(element: HTMLElement, ancestor?: HTMLElement | null): OmnisPoint;
        getDefaultDateFormatCustom(): string;
        setDefaultDateFormatCustom(format: string): void;
        getLocaleTimeFormat(): string;
        getLocaleShortDateFormat(): string;
        getLocaleShortDateTimeFormat(): string;
        getLocaleMediumDateFormat(): string;
        getLocaleMediumDateTimeFormat(): string;
        getLocaleLongDateFormat(): string;
        getLocaleLongDateTimeFormat(): string;
        getLocaleFullDateFormat(): string;
        getLocaleFullDateTimeFormat(): string;
        trim(value: string, chars?: string): string;
        ltrim(value: string, chars?: string): string;
        rtrim(value: string, chars?: string): string;
        inFirefox(): boolean;
        inOpera(): boolean;
        inChrome(): boolean;
        inSafari(): boolean;
        inEdge(): boolean;
        getMethod(object: ctrl_base | omnis_form, omnisMethodName: string, inheritanceLevel: number): string;
        doMethod(callType: number, object: ctrl_base | omnis_form, omnisMethodName: string, flags: number, ...args: OmnisValue[]): OmnisValue;
        defaultParameter<T>(parameter: T | null | undefined, defaultValue: T): T;
        inFirefoxiOS(): boolean;
        inChromeiOS(): boolean;
        deepCopy<T>(object: T): T;
        getURLParameters(): Record<string, string>;
        sendDOMEvent(target: Element, eventType: string, bubbles?: boolean): void;
        getContainerControl(element: Element): ctrl_base | null;

        /** Additional helpers exposed by the Studio 12 runtime. */
        escapeHTML(value: string, preserveLineBreaks?: boolean): string;
        escapeHTMLEx(value: string): string;
        createDOMEvent(type: string): Event;
        applyStyles(): void;
        setOpacity(element: HTMLElement, alpha: number | string): void;
        scrollIntoViewIfNeeded(element: HTMLElement, ancestor?: HTMLElement | null, centerIfNeeded?: boolean, smooth?: boolean): void;
    }

    var jOmnis: JOmnis;

    class OMColor {
        constructor(rgb: OmnisRGBInt);
        getLuminance(): number;
        static readonly eTintFactor: {
            readonly DEFAULT: number;
            readonly SMALL: number;
            readonly MEDIUM: number;
            readonly [name: string]: number;
        };
        static readonly eTintType: {
            readonly AUTO: number;
            readonly LIGHTEN: number;
            readonly DARKEN: number;
            readonly [name: string]: number;
        };
        static TintRGB(rgb: OmnisRGBInt, tintFactor?: number, tintType?: number): OmnisRGBInt;
        static TintRGBWithColor(baseRGB: OmnisRGBInt, tintRGB: OmnisRGBInt, tintFactor?: number): OmnisRGBInt;
    }

    function touchWithinRange(start: OmnisPoint, end: OmnisPoint, range: number): boolean;
}
