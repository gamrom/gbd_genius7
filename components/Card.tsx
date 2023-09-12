import Image, { StaticImageData } from "next/image"
import { useEffect, useState } from "react"
import { useSessionStorage } from "react-use"
import { css } from "@emotion/react"

export const Card = ({ mainImage, color, deleteImage, userKey, deleteKey }: { mainImage: StaticImageData, color: string, deleteImage: StaticImageData, userKey: string, deleteKey: string }) => {

    const [sessionUsername, setSessionUsername] = useSessionStorage(userKey, "")
    const [sessionIsDelete, setSessionIsDelete] = useSessionStorage(deleteKey, "")

    const [dd, setDD] = useState<boolean>();

    useEffect(() => {
        if (sessionIsDelete === "true") {
            setDD(true)
        } else {
            setDD(false)
        }
    }, [])

    useEffect(() => {
        if (dd) {
            setSessionIsDelete("true")
        } else {
            setSessionIsDelete("false")
        }
    }, [dd])


    return (
        <div className="w-full px-4 py-2 grid grid-cols-3 items-center">
            <div className="relative col-span-2">
                <Image src={mainImage} alt="1" className="object-contain" />
                {dd ? (
                    <Image src={deleteImage} alt="delete" className="w-1/2 absolute top-0 right-0 opacity-100" />
                ) : null}
            </div>
            <div className="flex flex-col col-span-1 ml-4">
                <input name="username" type="text" value={sessionUsername} onChange={(e) => {
                    setSessionUsername(e.target.value)
                }} className="h-[52px] text-[30px] font-bold text-center" css={css`
                    border-color: ${color};
                    border-width: 4px;
                    color: ${color};
                `} />

                <button type="button" onClick={() => {
                    setDD(!dd)
                }} className={`border border-black text-center mt-4 ${(sessionIsDelete === "true") ? "font-bold" : ""}`}>무효화</button>
            </div>
        </div>
    )
}