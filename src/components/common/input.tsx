import React from "react";
import { Input, Button } from "@material-tailwind/react";
import clsx from "clsx";

export default function InputWithButton({ className, type, label, buttonName, buttonStyle, textColor }: props) {
    const [email, setEmail] = React.useState("");
    const onChange = ({ target }: React.ChangeEvent<HTMLInputElement>) => setEmail(target.value);

    return (
        <div className={clsx("relative flex w-full", className)}>
            <Input
                type={type ? type : "text"}
                label={label ? label : "Masukkan Email Anda"}
                value={email}

                onChange={onChange}
                className="pr-20"
                containerProps={{
                    className: "min-w-0",
                }}
            />
            <Button
                size="sm"
                disabled={!email}
                className={clsx("!absolute right-1 top-1 rounded ", email ? buttonStyle : "bg-gray-900")}
            >
                {buttonName ? buttonName : "Kirim"}
            </Button>
        </div>
    );
}

type props = {
    className?: string;
    type?: string;
    label?: string;
    buttonName?: string;
    textColor?: string | 'black';
    buttonStyle?: string | 'bg-gray-900';
}