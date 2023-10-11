import { Select, Option } from "@material-tailwind/react";
import clsx from "clsx";
import { type } from "os";

export default function SelectDefault({ option, label, className, labelProps, menuProps, selectCustom }: props) {
    return (
        <div className={clsx(className)}>
            {
                option ? (
                    <Select label={label} labelProps={
                        {
                            className: clsx(labelProps)
                        }
                    }  menuProps={
                        {
                            className: clsx(menuProps)
                        }
                    }
                        className={clsx(selectCustom)}>
                        {
                            option?.map((item: option, index: number) =>
                                <Option key={index} value={item?.value}>{item?.name}</Option>
                            )
                        }
                    </Select>
                ) : 'provide option props'
            }
        </div>
    );
}

type props = {
    option?: any;
    className?: string;
    label?: string | 'masukkan label';
    labelProps?: string | 'black';
    menuProps?: string;
    selectCustom?: string;
}

type option = {
    name: string;
    value: string;
}