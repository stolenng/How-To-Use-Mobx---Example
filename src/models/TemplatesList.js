import { observable, computed, action, autorun } from "mobx";
import TemplateItem from "./TemplateItem";

export default class TemplateList {
    @observable templates = [];

    constructor() {
        this.addTemplate('First Template!');
        this.addTemplate('Second Template!');
        this.addTemplate('Third Template!');
        this.addTemplate('LASTTT Template!');
    }

    @computed
    get getTemplates() {
        return this.templates;
    }

    @action
    addTemplate = (text) => {
        this.templates.push(new TemplateItem(text));
    }
}
