import Image from "next/image";
import number1 from "../public/1.png"
import number2 from "../public/2.png"
import number3 from "../public/3.png"
import number4 from "../public/4.png"
import number5 from "../public/5.png"
import number6 from "../public/6.png"
import number7 from "../public/7.png"
import number8 from "../public/8.png"
import number9 from "../public/9.png"
import deleteAb from "../public/delete.png"
import { Card } from "./Card";


export const MainComp = () => {
    return (
        <div className="flex flex-col">
            <div className="grid max-h-screen w-full grid-cols-3 gap-4 px-4">
                {/* bg-[#D175D6] */}
                <Card mainImage={number1} color="#D175D6" deleteImage={deleteAb} userKey="username1" deleteKey="isDelete1" />
                <Card mainImage={number2} color="#48ADE8" deleteImage={deleteAb} userKey="username2" deleteKey="isDelete2"/>
                <Card mainImage={number3} color="#95221A" deleteImage={deleteAb} userKey="username3" deleteKey="isDelete3"/>
                <Card mainImage={number4} color="#3C7F27" deleteImage={deleteAb} userKey="username4" deleteKey="isDelete4"/>
                <Card mainImage={number5} color="#D97C2E" deleteImage={deleteAb} userKey="username5" deleteKey="isDelete5"/>
                <Card mainImage={number6} color="#C6BD40" deleteImage={deleteAb} userKey="username6" deleteKey="isDelete6"/>
                <Card mainImage={number7} color="#65219B" deleteImage={deleteAb} userKey="username7" deleteKey="isDelete7"/>
                <Card mainImage={number8} color="#5D3A1D" deleteImage={deleteAb} userKey="username8" deleteKey="isDelete8"/>
                <Card mainImage={number9} color="#2644F5" deleteImage={deleteAb} userKey="username9" deleteKey="isDelete9"/>
            </div>
        </div>
    );
}