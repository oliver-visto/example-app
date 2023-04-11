"use client"
export default function Error({error,reset})
{
    return(
        <div>
            Error {error.message}
            <button onClick={() => reset()}>Reload</button>
        </div>
    )
}