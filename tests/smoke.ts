import "../index";

class TestControl extends ctrl_base {
    init_ctrl_inst(form: omnis_form, elem: HTMLElement, rowCtrl: ctrl_base | null, rowNumber: number): boolean {
        super.init_ctrl_inst(form, elem, rowCtrl, rowNumber);
        const data = this.getData();
        const list = new omnis_list(data as omnis_raw_list);
        const column = list.findColumn("name");
        this.setData(list.getChar(column, 0, true));
        this.getTheme().getColorString(Theme.COLORS.primary);
        this.eventParamsAdd("pValue", list.getData(column, 0));
        this.sendEvent("evTest");
        return false;
    }

    handleEvent(event: Event): boolean {
        if (event.type === "click" && this.canSendEvent(eBaseEvent.evClick)) {
            this.sendEvent(eBaseEvent.evClick);
        }
        return true;
    }
}

const form = jOmnis.getOmnisForm(0, 0);
if (form) {
    const index = form.getDataIndex("iList", null, false);
    form.setData(index, new omnis_list(null), "");
}

const date = new omnis_date(null).add(eDateParts.kDay, 1);
date.toJavaScriptDate();

const stylesheet = jOmnis.addStyleSheet(".test { color: red; }");
jOmnis.removeStyleSheet(stylesheet);
