'use client'
import { useFormStatus } from "react-dom"
function Button()
{
    const {pending} = useFormStatus();
    return(
        <>
        <button disabled={pending}>
            {pending ? "Form is submitting" : "Submit"}
        </button>
        </>
    )
}

export default Button;