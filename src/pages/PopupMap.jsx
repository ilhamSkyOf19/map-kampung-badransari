import logo from "../assets/logo.png"
const PopupMap = ({ img, topPosition, leftPosition, ref, linkMaps, titleSatu = "", titleDua = "", titleTiga = "" }) => {
    return (
        <div
            ref={ref}
            className="w-[50%] h-[13%] absolute bg-blue-600 flex justify-between items-center overflow-hidden py-12 px-4 rounded-md"
            style={{ top: topPosition, left: leftPosition, position: "absolute" }} // Gunakan inline style
        >
            <div className="w-[40%] flex justify-center items-center">
                <img src={img} alt="Semenanjung Badran" className="w-full h-[6rem] object-cover rounded-lg" />
            </div>
            <div className="font-poppinss text-white flex flex-col justify-start items-start min-w-[55%] gap-1 relative">
                <img src={logo} alt="" className="w-[6rem] absolute -top-6 -left-1" />
                <div className="flex justify-start items-start flex-col uppercase pt-2">
                    <h1 className="text-[0.5rem] font-semibold">{titleSatu}</h1>
                    <h1 className="text-[0.5rem] font-semibold">{titleDua}</h1>
                    <h1 className="text-[0.5rem] font-semibold">{titleTiga}</h1>
                </div>
                <h2 className="text-[0.3rem]">Kampung Badran Sari, Kec. Punggur</h2>
                <a href={linkMaps} className="text-[0.3rem] py-1 px-2 bg-yellow-400 text-blue-600 rounded-full font-semibold hover:border-yellow-400 hover:border-1 hover:bg-blue-600 min-h-[1rem] hover:text-white ">Telusuri</a>
            </div>
        </div>
    );
};

export default PopupMap;