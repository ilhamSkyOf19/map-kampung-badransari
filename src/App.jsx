import { useState, useEffect, useRef } from "react"
import semenanjungImg from "./assets/semenanjung.jpg"
import balaiImg from "./assets/balai_desa.png"
import PopupMap from "./pages/PopupMap";
import lapanganImg from "./assets/lapangan.png"
import sdDuaImg from "./assets/sd_dua.png"
import pustuImg from "./assets/pustu.png"
import sdSatuImg from "./assets/sd_satu.png"
import masjidImg from "./assets/masjid.png"
function App() {
    const [semenanjung, setSemenanjung] = useState(false);
    const [balai, setBalai] = useState(false);
    const [lapangan, setLapangan] = useState(false);
    const [sdDua, setSdDua] = useState(false);
    const [pustu, setPustu] = useState(false);
    const [sdSatu, setSdSatu] = useState(false);
    const [masjid, setMasjid] = useState(false);

    const handleSemenanjung = () => {
        setSemenanjung(!semenanjung);
    }
    const handleBalai = () => {
        setBalai(!balai);
    }

    const handleLapangan = () => {
        setLapangan(!lapangan);
    }
    const handleSdDua = () => {
        setSdDua(!sdDua);
    }
    const handlePustu = () => {
        setPustu(!pustu);
    }
    const handleSdSatu = () => {
        setSdSatu(!sdSatu);
    }
    const handleMasjid = () => {
        setMasjid(!masjid);
    }

    const ref = useRef(null);
    const handleClickOutside = (event) => {
        if (ref.current && !ref.current.contains(event.target)) {
            setSemenanjung(false);
            setBalai(false);
            setLapangan(false);
            setSdDua(false);
            setPustu(false);
            setSdSatu(false);
            setMasjid(false);
        }
    };

    useEffect(() => {
        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, []);


    return (
        <div className="w-auto">
            <h1 className="py-10 text-lg text-center font-bold font-poppins">PETA KAMPUNG BADRAN SARI KECAMATAN PUNGGUR KABUPATEN LAMPUNG TENGAH</h1>
            {/* semenanjung */}
            <div onClick={handleSemenanjung} className="w-10 h-10 bg-transparent absolute top-[28rem] left-[30rem] cursor-pointer">
            </div>
            {/* masjid dusun 3.3 */}
            <div onClick={handleSemenanjung} className="w-5 h-5 bg-transparent absolute top-[33.5rem] left-[21.8rem] cursor-pointer">
            </div>
            {/* masjid dusun 3.2 */}
            <div onClick={handleSemenanjung} className="w-5 h-5 bg-transparent absolute top-[36.7rem] left-[18.2rem] cursor-pointer">
            </div>
            {/* masjid dusun 3.1 */}
            <div onClick={handleSemenanjung} className="w-5 h-5 bg-transparent absolute top-[36rem] left-[10.8rem] cursor-pointer">
            </div>
            {/* sekolah sd 2 */}
            <div onClick={handleSdDua} className="w-5 h-3 bg-transparent absolute top-[32.6rem] left-[11.3rem] cursor-pointer">
            </div>
            {/* pustu */}
            <div onClick={handlePustu} className="w-5 h-3 bg-transparent absolute top-[31.6rem] left-[11.4rem] cursor-pointer">
            </div>
            {/* masjid besar 2 */}
            <div onClick={handleSemenanjung} className="w-5 h-5 bg-transparent absolute top-[32.5rem] left-[15.9rem] cursor-pointer">
            </div>
            {/* masjid dusun 2.1 */}
            <div onClick={handleSemenanjung} className="w-5 h-5 bg-transparent absolute top-[30rem] left-[15.9rem] cursor-pointer">
            </div>
            {/* masjid dusun 2.2 */}
            <div onClick={handleSemenanjung} className="w-5 h-5 bg-transparent absolute top-[26rem] left-[17.7rem] cursor-pointer">
            </div>
            {/* masjid besar 1 */}
            <div onClick={handleMasjid} className="w-4 h-4 bg-transparent absolute top-[26.4rem] left-[13.9rem] cursor-pointer">
            </div>
            {/* lapangan */}
            <div onClick={handleLapangan} className="w-5 h-5 bg-transparent absolute top-[28.3rem] left-[14.7rem] cursor-pointer">
            </div>
            {/* sd 1 */}
            <div onClick={handleSdSatu} className="w-3 h-2 bg-transparent absolute top-[28.7rem] left-[13.5rem] cursor-pointer">
            </div>
            {/* balai desa */}
            <div onClick={handleBalai} className="w-3 h-3 bg-transparent absolute top-[26.8rem] left-[13rem] cursor-pointer">
            </div>

            <div className="h-[3rem] w-[100%] flex justify-center items-center flex-col pt-24 fixed bottom-12">
                <div className="flex justify-center items-center">
                    <p className="text-[0.8rem]">&copy;</p>
                    <p className="text-sm">2025</p>
                </div>
                <div className="flex justify-center items-center flex-col">
                    <p className="text-sm">KKN ILKOM </p>
                    <p className="text-sm">Universitas Muhammadiyah Metro </p>
                </div>
            </div>
            {semenanjung ? <PopupMap img={semenanjungImg} topPosition={"21rem"} leftPosition={"25rem"} ref={ref} titleSatu="Wisata Alam" titleDua="Semenanjung" titleTiga="Badran" linkMaps={"https://maps.app.goo.gl/tTnsG63b35rZeYJQA"} /> : null}
            {balai ? <PopupMap img={balaiImg} topPosition={"20rem"} leftPosition={"9rem"} ref={ref} titleSatu="Balai Desa" titleDua="Kampung" titleTiga="Badran Sari" linkMaps={"https://maps.app.goo.gl/jWQX3qdrDq1ysSNE9"} /> : null}
            {lapangan ? <PopupMap img={lapanganImg} topPosition={"25rem"} leftPosition={"17rem"} ref={ref} titleSatu="Lapangan" titleDua="Kampung" titleTiga="Badran Sari" linkMaps={"https://maps.app.goo.gl/tueU44DbVuG7xo7E8"} /> : null}
            {sdDua ? <PopupMap img={sdDuaImg} topPosition={"32rem"} leftPosition={"13rem"} ref={ref} titleSatu="SDN 02" titleDua="Kampung" titleTiga="Badran Sari" linkMaps={"https://maps.app.goo.gl/D7M8PP8dZhZpA4bs9"} /> : null}
            {pustu ? <PopupMap img={pustuImg} topPosition={"32rem"} leftPosition={"1rem"} ref={ref} titleSatu="Puskesmas Pembantu" titleDua="Kampung" titleTiga="Badran Sari" linkMaps={"https://maps.app.goo.gl/C1XFDzpRK3Rq9NHE9"} /> : null}
            {sdSatu ? <PopupMap img={sdSatuImg} topPosition={"30rem"} leftPosition={"15rem"} ref={ref} titleSatu="SDN 01" titleDua="Kampung" titleTiga="Badran Sari" linkMaps={"https://maps.app.goo.gl/U1xqgrue6Etq6wUY6"} /> : null}
            {masjid ? <PopupMap img={masjidImg} topPosition={"23rem"} leftPosition={"15rem"} ref={ref} titleSatu="Majid AT-Taubat" titleDua="Kampung" titleTiga="Badran Sari" linkMaps={"https://maps.app.goo.gl/d2ggxxVSygQkUdvS9"} /> : null}

        </div>
    )
}

export default App
