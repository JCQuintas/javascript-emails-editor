declare module "components/options" {
    export interface Options {
        container: HTMLElement;
        title?: string;
        onChange?: (type: 'add' | 'remove', email: string, currentEmails: string[]) => void;
    }
    export const defaultOptions: Partial<Options>;
}
declare module "components/heading" {
    import { Options } from "components/options";
    export const createHeading: (options: Options) => HTMLHeadingElement;
}
declare module "components/utils" {
    export const emailRegex: RegExp;
}
declare module "components/email-pill" {
    export const createEmailPill: (email: string, onRemove: (email: string) => void) => HTMLSpanElement;
}
declare module "components/input" {
    import { Options } from "components/options";
    export const createInput: (options: Options) => {
        container: HTMLDivElement;
        setEmails: (emails: string) => void;
        getEmails: () => string[];
    };
}
declare module "components/button" {
    export const createButton: (text: string, onClick: () => void) => HTMLButtonElement;
}
declare module "components/paper" {
    import { Options } from "components/options";
    export const createPaper: (options: Options) => {
        container: HTMLDivElement;
        getEmails: () => string[];
        setEmails: (emails: string) => void;
    };
}
declare module "index" {
    import { Options } from "components/options";
    export const EmailsEditor: (options: Options) => {
        getEmails: () => string[];
        setEmails: (emails: string) => void;
    };
}
