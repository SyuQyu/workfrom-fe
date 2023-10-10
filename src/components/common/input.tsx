import React from "react";
import { Input, Button } from "@material-tailwind/react";

export default function InputWithButton() {
    const [email, setEmail] = React.useState("");
    const onChange = ({ target }: React.ChangeEvent<HTMLInputElement>) => setEmail(target.value);

    return (
        <div className="relative flex w-full">
            <Input
                type="email"
                label="Masukkan Email Anda"
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
                className="!absolute right-1 top-1 rounded bg-gray-900"
            >
                Kirim
            </Button>
        </div>
    );
}