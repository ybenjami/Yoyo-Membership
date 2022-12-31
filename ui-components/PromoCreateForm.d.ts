/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { GridProps, TextFieldProps } from "@aws-amplify/ui-react";
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type PromoCreateFormInputValues = {
    title?: string;
    body?: string;
    image?: string;
};
export declare type PromoCreateFormValidationValues = {
    title?: ValidationFunction<string>;
    body?: ValidationFunction<string>;
    image?: ValidationFunction<string>;
};
export declare type FormProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type PromoCreateFormOverridesProps = {
    PromoCreateFormGrid?: FormProps<GridProps>;
    title?: FormProps<TextFieldProps>;
    body?: FormProps<TextFieldProps>;
    image?: FormProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type PromoCreateFormProps = React.PropsWithChildren<{
    overrides?: PromoCreateFormOverridesProps | undefined | null;
} & {
    clearOnSuccess?: boolean;
    onSubmit?: (fields: PromoCreateFormInputValues) => PromoCreateFormInputValues;
    onSuccess?: (fields: PromoCreateFormInputValues) => void;
    onError?: (fields: PromoCreateFormInputValues, errorMessage: string) => void;
    onCancel?: () => void;
    onChange?: (fields: PromoCreateFormInputValues) => PromoCreateFormInputValues;
    onValidate?: PromoCreateFormValidationValues;
} & React.CSSProperties>;
export default function PromoCreateForm(props: PromoCreateFormProps): React.ReactElement;
