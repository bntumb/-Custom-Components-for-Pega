/// <reference types="react" />
import '../shared/create-nonce';
type BannerInputProps = {
    /**  The value to display in the banner input */
    value: string;
    /** variant of the banner input
     * @default 'success'
     */
    variant?: 'success' | 'urgent' | 'info' | 'warn' | 'pending';
    /** icon to use
     * @default 'warn-solid'
     */
    icon?: 'warn-solid' | 'flag-wave-solid' | 'check' | 'information-solid';
};
export declare const PegaExtensionsBannerInput: (props: BannerInputProps) => import("react/jsx-runtime").JSX.Element;
declare const _default: (props: BannerInputProps) => JSX.Element;
export default _default;
//# sourceMappingURL=index.d.ts.map