/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { Testimonial } from "../models";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { ViewProps } from "@aws-amplify/ui-react";
export declare type TestimonyProps = React.PropsWithChildren<Partial<ViewProps> & {
    testimonialModule?: Testimonial;
} & {
    overrides?: EscapeHatchProps | undefined | null;
}>;
export default function Testimony(props: TestimonyProps): React.ReactElement;
