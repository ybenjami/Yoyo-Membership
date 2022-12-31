/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { Promo } from "../models";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { GridProps, TextFieldProps } from "@aws-amplify/ui-react";
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type PromoUpdateFormInputValues = {
    title?: string;
    body?: string;
    image?: string;
};
export declare type PromoUpdateFormValidationValues = {
    title?: ValidationFunction<string>;
    body?: ValidationFunction<string>;
    image?: ValidationFunction<string>;
};
export declare type FormProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type PromoUpdateFormOverridesProps = {
    PromoUpdateFormGrid?: FormProps<GridProps>;
    title?: FormProps<TextFieldProps>;
    body?: FormProps<TextFieldProps>;
    image?: FormProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type PromoUpdateFormProps = React.PropsWithChildren<{
    overrides?: PromoUpdateFormOverridesProps | undefined | null;
} & {
    id?: string;
    promo?: Promo;
    onSubmit?: (fields: PromoUpdateFormInputValues) => PromoUpdateFormInputValues;
    onSuccess?: (fields: PromoUpdateFormInputValues) => void;
    onError?: (fields: PromoUpdateFormInputValues, errorMessage: string) => void;
    onCancel?: () => void;
    onChange?: (fields: PromoUpdateFormInputValues) => PromoUpdateFormInputValues;
    onValidate?: PromoUpdateFormValidationValues;
} & React.CSSProperties>;
export default function PromoUpdateForm(props: PromoUpdateFormProps): React.ReactElement;
