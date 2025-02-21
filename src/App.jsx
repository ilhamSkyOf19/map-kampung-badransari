
const icons = [
  { src: "./assets/icon_semenanjung.png", width: "3rem", top: "8rem", right: "2.8rem" },
  { src: "/masjid_hijau.png", width: "1.2rem", top: "11.5rem", right: "8.3rem" },
  { src: "/masjid_orange.png", width: "1rem", top: "13.7rem", right: "10.5rem" },
  { src: "/masjid_hijau.png", width: "1rem", top: "7.2rem", right: "10.7rem" },
  { src: "/masjid_orange.png", width: "1rem", top: "8.4rem", left: "8.1rem" },
  { src: "/lapangan.png", width: "1rem", top: "9.6rem", left: "8.7rem" },
  { src: "/icon_sekolah.png", width: "0.8rem", top: "9.7rem", left: "8rem" },
  { src: "/icon_sekolah.png", width: "0.8rem", top: "11.2rem", left: "7rem" },
  { src: "/icon_pustu.png", width: "0.6rem", top: "10.9rem", left: "7.1rem" },
];


import jalan from "./assets/icon_jalan.png";
function App() {
  return (
    <>
      <h1 className="text-center font-poppins font-bold text-sm mt-4">PETA ADMINISTRASI KAMPUNG BADRAN SARI</h1>
      <h1 className="text-center font-poppins font-bold text-sm">KECAMATAN PUNGGUR</h1>
      <div className=" relative overflow-auto whitespace-nowrap overflow-x-scroll bg-white font-poppins font-semibold text-2xl">
        <img
          src={jalan}
          alt=""
          className="w-[15.3rem] absolute top-[1.6rem] left-[3.8rem] z-10"
        />
        {icons.map((icon, index) => (
          <img
            key={index}
            src={icon.src}
            alt=""
            className={`absolute z-10 transition-all duration-300 hover:scale-200 cursor-pointer`}
            style={{
              width: icon.width,
              top: icon.top,
              left: icon.left || "auto",
              right: icon.right || "auto",
            }}
          />
        ))}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          xmlSpace="preserve"
          id="Layer_1"
          version="1.1"
          viewBox="0 0 1232 1105.2"
          width="100%"
          height="auto"
          className="w-full h-auto"
        ><switch><g><path d="m-642.6 601.3-16 121-17 40 27 36-15 66-1 51-28 83" style={{ fill: "none", stroke: "#b42925", strokeMiterlimit: 10 }}
        /><path d="M864.3 85.3c-1 .1-95.6 11.3-116.6 14.2-24.4 3.3-39.4 30.4-40.1 31.6l-.2.4-51.7 130.9-47.6 46.6-30.1 30-.2.3c-.1.2-6 6.7-13.9 15.2l-5.8 6.3c-10.2 10.9-21.9 23.2-28.8 29.3-11.6 10.4-32.3 25.3-38.9 30.1l-93.7-11.7-92-148.7-65.9-2.9-.5 13.6 7.8.4v-.4c0-.5.2-1.1.6-1.4.4-.4.9-.6 1.5-.6l48.6 1.7c.7 0 1.3.4 1.6 1l91.4 148.2 105.6 12.5 30.8-25.6c1.1-1 2.2-2 3.4-3 3.5-3 7-6.1 10.5-9.5 3.3-3.2 8.3-8.4 12.2-12.6l1.6-1.7c.4-.5 1.9-2 1.9-2l6-7.7c31.2-32.7 85.5-86.2 102-102.4l29.3-71.1.1-.2 25-60.7c.1-.2.2-.4.4-.6l.3-.4c0-.1.1-.1.2-.3 6-9 13.5-16.6 21.1-21.3l.1-.1h.1c4.6-2.8 9.4-4.7 14.2-5.5 11.3-1.8 52.9-6.9 88.1-11h.4c1.5 0 2.8 1.1 3 2.6l.3 2.3c11.6-1.4 19.4-2.3 19.7-2.3l-1.8-13.5zM254.6 779.6l-3.2 2c-3.3-9-5.5-15.8-5.5-15.8l1-4.6.6 1.4.4 1.1.5 1.1.1.3.7 1.6 1.6 3.7.9 2.2c.9 2.1 1.9 4.5 2.9 7z" style={{ fill: "#2caae2" }} /><path d="M256.6 784.2c.1.4.3.7.5 1.1-.2-.4-.3-.8-.5-1.1zM334.7 930c.5-.4 1-.7 1.4-1.2-.4.4-.9.8-1.4 1.2z" style={{ fill: "#8dc640" }} /><path d="M1054.7 515.1c-.8 1.8-.9 4.3-1 7.8-.3 8.2-.9 20.6-10.8 27.9-6.9 5.1-9.5 12.8-12.2 21.1-3.6 11-7.4 22.4-22.5 28.1-21.7 8.3-24.5 40.1-26.4 61.2-.6 6.3-1.1 12.9-2.1 14.6-1.6 2.8-4.4 4.2-8.4 4.2-2.2 0-3.9-.5-3.9-.5-.3-.1-.5-.1-.8-.1-.6 0-1.2.2-1.7.5-.1.1-14.6 10.1-23 15.5-5.1 3.3-7.6 8.1-9.9 12.4-1.8 3.5-3.4 6.4-5.8 7.6-.1 0-.7.2-2.9.2-2 0-4.7-.2-7.9-.3-4.3-.3-9.2-.5-14.3-.5-16.4 0-27 3.1-33.4 9.6-4.5 4.5-6.6 10.7-6.5 18.2.3 12.4-2.3 21.5-7.6 26.9-4.9 5-10.6 5.2-11.2 5.2h-.1c-.5 0-1 .1-1.5.4-15.4 8.6-20.8 17.3-29.8 33.2-6.7 11.8-11.4 16.2-17.4 16.2-3.6 0-7.8-1.6-13-4.8-10.2-6.3-23-9.6-38.1-9.6-5.7 0-11.6.5-17.7 1.4-5.1.8-7.4 3.5-8.3 5.6-2.5 5.5.6 12.9 2.6 16.8-4.4 3.3-6.7 3.7-7.5 3.7-.2 0-.4 0-.5-.1-.5-.5-1.2-.9-1.9-1-2.8-.3-5.6-.5-8.2-.5-25.4 0-38 15-50.2 29.5-2.7 3.2-5.4 6.5-8.3 9.6-15.3 16.5-3.7 29.8.6 34.8.3.4.7.8 1 1.2-.2.2-.5.3-.6.3-1.5.4-2.9.6-4.4.6-10.9 0-18.3-11.9-18.3-12-.6-.9-1.6-1.4-2.6-1.4-.4 0-.9.1-1.3.3l-20.6 10-10.2-16.7c-.6-.9-1.5-1.4-2.6-1.4-.4 0-.8.1-1.2.3-1.8.8-3.4 1.2-4.9 1.2-3.5 0-5-2.3-5.1-2.5-.2-.4-.5-.8-.9-1-22.5-15.6-55.8-17.9-73.6-17.9-7.6 0-12.4.4-12.6.4l-22.4 2.9h-.1c-2.1.4-4 .9-5.8 1.5l-1.8.6c-.2.1-.3.1-.4.2-.5.2-.9.4-1.4.5-1.6.7-3.2 1.5-4.7 2.3-.1 0-.1.1-.2.1-.5.3-.9.5-1.3.8-.4.3-.9.6-1.3.9 0 0-.1 0-.1.1-.4.3-.7.5-1.1.8-1.5 1.1-3.1 2.4-4.7 3.8l-.2.2-.1.1c-.7.6-1.3 1.2-2 1.8l-3.7 3.7c-2.1 2.1-3.8 4-5.6 5.3-.1.1-.2.2-.3.2-.1 0-.1.1-.2.1-.1.1-.2.1-.3.2 0 0-.1 0-.1.1-.3.2-.6.4-1 .6-.2.1-.3.2-.5.3-2 .8-5.2 1.3-9.6 1.3-4 0-8.3-.3-11.7-.6-2.5-.2-4.7-.4-6.2-.4-1.3 0-2.3.1-3.1.6-1.8 1-20.4 10.1-30.9 10.1-1.5 0-2.7-.2-3.5-.6-3-1.3-5.7-1.9-8.2-1.9-5.5 0-7.8 3.1-8 3.5l-.3.6c-3.8 9-10.2 19.6-19.3 19.6-1.8 0-3.7-.4-5.6-1.2-8.6-3.6-11.9-18.8-12.4-24.4 0-.5-.2-.9-.5-1.3l-30.1-47.4c6-16.8 1.2-32.9-2.8-39.9 0-.1-.1-.1-.2-.3-.7-1.3-2.2-4.7-3.2-7-.1-.3-.3-.7-.5-1l-.3-.6c-.3-.6-.5-1.2-.8-1.8-.2-.4-.4-.9-.6-1.3l-.6-1.4c-.4-1-.9-2-1.3-3l-.1-.3c-.3-.6-.5-1.2-.8-1.8l-.1-.3c-.1-.3-.2-.5-.4-.8-1.2-2.8-2.5-5.8-3.8-8.8-.5-1.1-1-2.3-1.5-3.5-.1-.3-.3-.6-.4-.9-.1-.2-.2-.3-.3-.5l2.5-1.6 61.8-38.1 190 17.5 146.3 12.8h.2c.5 0 1-.2 1.5-.5l154.3-111.3c1.1-.8 1.4-2.3.6-3.4l-13.6-20.3 92.6-156 1.5-2.6.6.3c1.1.4 2.1.7 3.2 1h.1c.5.1 1 .3 1.5.5l1.1.3 1.3.4 1.9.5h.2c1.2.3 2.5.6 4.1 1h.2c.7.1 1.3.3 1.9.4.1 0 .2 0 .3.1.6.1 1.2.2 1.9.4.7.1 1.4.3 2.1.3.7.1 1.5.2 2.2.3h.2c.5.1 1 .1 1.5.2l1.1.1c.6 0 1.1.1 1.7.1.6 0 1.2.1 1.8.1h2.1c1.4 0 2.9-.1 4.3-.2 3.3-.3 6.7-.4 10.1-.4 15.6 0 28.3 2.9 30.8 3.6 3.7 2.5 27.9 18.4 49.9 18.4 2.8 0 5.4-.3 7.9-.8 3.4-.7 6.5-1 9.3-1 8.9 0 12.5 3.4 13.8 5.4 1.4 1.9 1.4 3.8 1.1 4.5zM1115.5 461.8c-2.1.6-8.4 2.4-13 2.4-1.5 0-2.8-.2-3.7-.6-.7-.3-1.4-.4-2.2-.4-4.9 0-11.6 4.7-11.6 4.7s-6.3 5.1-10.5 5.1c-.8 0-1.4-.2-2-.5-.6-.4-1.3-.6-2.1-.6-3.4 0-8.4 3.1-13.7 3.1-1.1 0-2.3-.2-3.5-.5-2.3-.7-6.1-.9-10.6-.9-10.9 0-25.9 1.4-33.3 1.5h-.1c-3.6 0-6.3-1.9-8.5-4.5-.4-.5-.8-1-1.1-1.5-.1-.1-.2-.3-.3-.4l-.6-.9c-.6-.9-1.1-1.8-1.6-2.8-.2-.4-.4-.8-.7-1.2-.1-.1-.1-.3-.2-.4-.1-.3-.3-.5-.4-.8-.1-.3-.3-.5-.4-.8-.1-.3-.3-.5-.4-.8-1.2-2.2-2.2-4-3.3-4.7-.4-.3-.9-.4-1.5-.4-5 0-15.7 8.4-15.7 8.4s-5.4-3-14.9-3c-1 0-2.1 0-3.3.1-.4 0-.8.1-1.2.1-1.2.1-2.3.3-3.5.5l-1.8.3c-1.1.2-2.2.4-3.4.6-.3 0-.7.1-1 .2-.9.1-1.8.3-2.8.4-.5 0-1 .1-1.5.2-1.1.1-2.3.2-3.6.3-.5 0-.9 0-1.4.1h-5.2c-.4 0-.8 0-1.2-.1-.6 0-1.2-.1-1.8-.1-.6 0-1.1-.1-1.7-.2-1.6-.2-3.3-.4-5.2-.7-.4-.1-.7-.1-1.1-.2-1.1-.2-2.2-.4-3.4-.6-.4-.1-.7-.1-1.1-.2-.3-.1-.7-.2-1-.2l-1.5-.3c-.4-.1-.8-.2-1.3-.3-.4-.1-.8-.2-1.3-.3-.8-.2-1.6-.4-2.5-.6l94.1-158.8 46.8-7.6 3.6 97.3 31.1-3.8 14.4 37.3 17.7 37.1z" style={{ fill: "#8dc640" }} />
          <path d="m552.8 386.7-45.5 366.1-184-16.9c-1-.1-2 .1-2.8.7l-65 40.1-2.1-4.9-3.2-7.7v-.1l-1.2-2.9 21-100.6c0-.2.1-.4 0-.6l-6.4-62.7 8.6-83.2c.1-.6-.1-1.2-.6-1.6L233.8 473l14.6-50.6c0-.2.1-.4.1-.5l1.6-149.2 45.5 1.6L387 422.2c.3.5.9.9 1.5.9l107.4 12.7c.5.1 1.1-.1 1.5-.4l.1-.1 31.5-26.1c1.1-1 2.3-2 3.4-3 3.5-3 7.1-6.2 10.7-9.6 2.5-2.5 6.2-6.3 9.7-9.9z" style={{ fill: "#41b764" }}
          />

          <path d="M996.2 301.5 904.7 456c-.2-.1-.4-.2-.7-.3-1.4-.4-2.6-.8-3.7-1.1-18.9-5.9-32.6-19.3-40.8-29.5-10.3-12.8-16.3-26-18.5-34-2.6-9.4.6-27.9 3.1-42.8 2.3-13.7 3.6-21.6 2.3-25.3-1.4-4-5.8-11.8-10.4-19.9-4.1-7.3-8.8-15.6-9.7-18.6-1.2-4-2.4-10-3-13.1-.2-.8-.3-1.5-.4-2.1v-.1l-.1-.3c0-.2-.1-.3-.1-.5s-.1-.4-.1-.5c-.1-.6-.2-1-.2-1-.1-.4-.2-.7-.4-1 0-.1-4.4-7.3-10.1-16.3 0-.1-.1-.1-.1-.2l-.5-.7-.6-.9c-.1-.1-.1-.3-.2-.4L809 245c-.1-.1-.1-.3-.2-.4-.3-.5-.7-1.1-1-1.6 0 0 0-.1-.1-.1-.4-.6-.8-1.3-1.2-1.9-.4-.6-.8-1.3-1.2-1.9l-.5-.7c-.3-.4-.5-.8-.8-1.2-.6-1-1.3-1.9-1.9-2.9-.4-.6-.8-1.2-1.2-1.9-.2-.3-.4-.6-.6-1-.3-.5-.6-.9-.9-1.4-.3-.5-.6-.9-.9-1.4l-.6-.9c-.6-.9-1.2-1.7-1.8-2.6-.8-1.1-1.6-2.2-2.3-3.3-.6-.8-1.1-1.5-1.7-2.3-.8-1.1-1.5-1.9-2-2.6-.3-.4-.6-.8-.9-1.1-.1-.1-.2-.3-.3-.4l-.1-.2c-.3-.4-.6-.7-.9-1l-.2-.2-1.2-1.2c-1.4-1.4-2.5-2.1-3.7-2.4-.2 0-.5-.1-.8-.1-1.3 0-2.4.7-3 1.8-1.6 2.9.1 7 20 38.4 4.9 7.8 10 15.8 10.8 17.8 1 2.5.9 6.4.8 10.2-.2 4.5-.3 8.7 1.5 11.7 1.6 2.7 2.6 9.6 2 13.6 0 .1 0 .2-.1.4v.1c-.1.3-.1.5-.2.7 0 .2-.1.3-.1.4l-.1.1c-.2.2-.3.4-.4.4 0 .1-.1.1-.1.2-1.5 2.1-.3 4.5.1 5.3 0 0 0 .1.1.1.2.3.3.6.5.9 0 .1.1.2.2.3.2.3.4.7.6 1 .2.3.4.5.5.8 0 .1.1.1.1.2l.1.1c.1.2.3.4.4.6l.1.1c.1.1.2.2.3.4l.1.1c.1.2.3.4.4.5l.3.3c.1.2.3.3.4.5.3.4.7.8 1 1.3l.5.6c.2.2.4.5.6.7l.3.3.5.5c.2.2.3.4.5.5l.1.2c.6.7 1.3 1.4 1.9 2l.7.7.9.9.4.4.4.4s0 .1.1.1l.1.1c0 .1.1.1.2.2l.2.2.2.2.7.7.4.5.3.3.4.4c-3.1 22.9-10.6 78.1-11.5 82.1-.5 2-.2 5.5 5.6 14.9 2.1 3.4 4.4 6.6 5.8 8.7 0 .1-.1.1-.1.2-.2.3-.5.6-.7 1l-.2.3c-.2.3-.5.6-.8 1-.7.9-1.5 1.8-2.4 2.8-.5.5-.9 1.1-1.4 1.6l-.1.1c-.2.3-.5.5-.7.8-1.3 1.5-2.8 3-4.5 4.8-.7.7-1.4 1.5-2.2 2.3l-1.5.9-1.1 1.1-2.3 2.3c-1.2 1.2-2.3 2.4-3.6 3.6-4.4 4.5-9.3 9.3-14.4 14.5-4.6 4.6-9.4 9.5-14.5 14.5-1.1 1.1-2.1 2.2-3.2 3.3l-1.6 1.6c-.6.5-1.1 1.1-1.7 1.7-.4.4-.7.8-1.1 1.1l-.6.6c-1.1 1.1-2.2 2.2-3.3 3.4l-2.3 2.4-1 1c-.5.6-1.1 1.1-1.6 1.7-.6.6-1.1 1.2-1.7 1.7-1.7 1.7-3.3 3.4-4.9 5.1l-.1.1c-1.7 1.7-3.2 3.5-4.6 5.2-.5.6-1 1.3-1.5 1.9l-.3.4c-.1.2-.3.3-.4.5-.5.6-.9 1.2-1.4 1.9-.2.3-.4.6-.6.8-.5.6-.9 1.2-1.3 1.8-.5.7-.9 1.4-1.5 2.3-.1.2-.3.4-.4.7l-.2.4v.1c-.2.4-.4.8-.7 1.2-.4.8-.8 1.5-1.2 2.3-.3.6-.6 1.3-1 2.2l-.9 2.1s0 .1-.1.2c-.2.4-.3.9-.5 1.4-.1.4-.3 1-.5 1.5-1.5 5-1.7 9.6-.6 13.3.2.5.3 1 .5 1.4.3.6.5 1.2.8 1.6.2.4.4.7.6.9 1.8 2.5 4.4 3.8 7.4 3.8 6.8 0 13.3-6.8 17.3-18.3 5.8-16.4 18.2-34.1 36.9-52.8 3-3 6.3-6.1 9.6-9.2.2-.2.4-.3.6-.5.2-.2.4-.4.6-.5 1.5-1.4 3.1-2.8 4.7-4.2 2.5-2.2 4.9-4.2 6.7-5.8l2.1-1.8c1.7-1.5 3.4-2.8 5-4.1.8-.6 1.6-1.2 2.4-1.7 1.6-.9 3.2-1.7 5-2.2.6-.2 1.2-.3 1.7-.4.3-.1.6-.1.9-.1.5-.1 1-.1 1.5-.2.6-.1 1.3-.1 2-.1h1.1c.4 0 .7 0 1.1.1h.1c.4 0 .7.1 1.1.1h.1c.3 0 .7.1 1 .2.3 0 .7.1 1 .2h.1c.2 0 .3.1.5.1h.2c.2 0 .4.1.6.1 1.4.3 2.8.7 4.1 1.2.3.1.5.2.7.2h.1c.2 0 .3.1.5.2h.1c.3.1.6.2.9.4h.1c.2.1.5.2.7.3l.3.1s.1 0 .1.1c.3.1.5.2.8.4h.1c.3.1.6.3.9.4.1 0 .1.1.2.1l.1.1c.2.1.5.2.7.3h.1c.3.1.6.3.9.4.1 0 .1.1.2.1l.4.2.4.2c.1.1.3.2.4.2.2.1.3.2.5.3 0 0 .1 0 .1.1.3.2.7.4 1 .6 1.8 1.1 3.7 2.3 5.6 3.6.3.2.6.4.8.6l3.6 2.7.3.3.1.1c.4.3.6.5.7.6 0 0 .1 0 .1.1.2.2.5.4.7.5.1 0 .2.1.3.1h.1c.1 0 .3.1.5.2l.2.1.6.3h.1l.2.1.5.3c.4.2.8.4 1.3.6.1.1.2.1.3.2.1 0 .2.1.3.1.3.2.7.3 1.1.5h.1c.8.4 1.7.8 2.7 1.2.4.2.8.3 1.3.5h.1l.3.1c.2.1.3.1.5.2.3.1.7.3 1.1.4 1.5.6 3 1.2 4.6 1.8l-94 158.6c-.5.8-.5 1.9.1 2.7l13.1 19.6-151.9 109.6L514 755.4l47-378c12.7-13.4 25.2-27.1 26.7-28.9l30-29.9 49.6-48.6 28.7-72.6.1-.2 25-60.7.3-.4c.4-.5 8.1-13.2 20.4-20.8 2.4-1.2 5-2 7.7-2.4 14.5-2 64.2-7.9 93.8-11.4l3.8 30.9h1.5c7.4.3 39.6 1.5 54.4 1.9l43.4 1.4.7 161.4 47.6 4.4h1.5z" style={{ fill: "#eda23b" }} />
          <text className="translate-y-40 -translate-x-14" transform="translate(657.009 444.02)">Dusun II</text><text transform="translate(438.983 227.2)">Kota Gajah</text><text className="st5 st6" transform="translate(545.294 1004.198)">Metro Utara</text><text className="st5 st6" transform="translate(1018.846 213.116)">Sri Sawahan</text><text className="st5 st6" transform="translate(43.43 608.608)">Toto Katon</text><text transform="translate(539.211 827.847)">Dusun III</text><text className="translate-y-24 -translate-x-14" transform="translate(343.14 587.608)">Dusun I</text><path d="M997.1 465c.5.9 1 1.9 1.6 2.8-.5-1-1-1.9-1.6-2.8z" style={{ fill: "#2caae2" }} /><path d="m1127.3 487.6-10.6-23c-.1.1-.3.1-.4.2-2.5.8-8.9 2.5-13.9 2.5-2 0-3.7-.3-5-.9-.3-.1-.6-.2-1-.2-2.8 0-7.4 2.5-9.7 4.1-1.4 1.1-7.4 5.7-12.3 5.7-1.4 0-2.6-.3-3.7-1-.1 0-.3-.1-.5-.1-1 0-2.7.5-4.4 1.1-2.6.9-5.8 2-9.3 2-1.5 0-3-.2-4.3-.6-1.8-.5-5.1-.8-9.7-.8-6.1 0-13.5.5-20 .8-5.1.3-9.9.6-13.2.6h-.1c-8.7 0-13.2-8.7-16.1-14.4-.9-1.7-2.1-4.1-2.8-4.7-2.5 0-9.1 4-13.8 7.8-.5.4-1.2.6-1.9.6-.5 0-1-.1-1.4-.3 0 0-5-2.6-13.5-2.6-1 0-2 0-3 .1-.4 0-.7.1-1.1.1-1 .1-2.1.3-3.3.5-.6.1-1.1.2-1.7.3l-.8.1c-.8.2-1.7.3-2.6.5-.2 0-.3 0-.4.1-.2 0-.4.1-.6.1-1 .2-2 .3-2.9.4-.2 0-.4.1-.6.1-.3 0-.6.1-.9.1-1.3.1-2.5.2-3.8.3-.5 0-1 0-1.5.1H931c-.4 0-.8 0-1.2-.1h-.1c-.6 0-1.2-.1-1.8-.1h-.1c-.6-.1-1.1-.1-1.7-.2-1.8-.2-3.6-.4-5.3-.7l-1.1-.2c-1.1-.2-2.3-.4-3.4-.6h-.1c-.3-.1-.7-.1-1-.2h-.1c-.2 0-.3-.1-.5-.1s-.3-.1-.5-.1c-.5-.1-.9-.2-1.4-.3-.4-.1-.9-.2-1.3-.3-.4-.1-.8-.2-1.1-.3h-.2c-.7-.2-1.5-.4-2.2-.6l-.3-.1c-.3-.1-.5-.2-.8-.3v.1l-.1-.1c-.7-.3-2.8-3.1-3.3-3.8l.1-.1h-.2c-1.2-.3-2.4-.7-3.6-1.1-35.6-11.2-56.5-48.2-61.3-65.5-4.8-17.3 8.2-60.3 5.4-68-2.7-7.7-18.2-32-20.2-38.7-1.2-3.9-2.4-9.5-3.1-13.4-.2-.8-.3-1.6-.4-2.2-.1-.3-.1-.6-.2-.9 0-.1 0-.3-.1-.4-.1-.7-.2-1.1-.2-1.1s-2.6-4.3-6.4-10.4c-.3-.4-.5-.9-.8-1.3-.3-.5-.6-.9-.9-1.4-.3-.5-.6-1-1-1.5-.3-.6-.7-1.1-1.1-1.7l-1.2-1.8c-.6-.9-1.2-1.8-1.8-2.8-.4-.6-.8-1.3-1.2-1.9-.4-.6-.8-1.3-1.2-1.9-.4-.6-.8-1.3-1.2-1.9s-.8-1.3-1.3-1.9c-.6-1-1.3-1.9-1.9-2.9-.4-.6-.8-1.3-1.3-1.9l-.6-.9c-.6-.9-1.2-1.8-1.9-2.7l-.6-.9c-.6-.9-1.2-1.8-1.8-2.6-.8-1.1-1.6-2.2-2.3-3.2-.6-.8-1.1-1.5-1.6-2.2-.7-.9-1.4-1.8-2-2.6-.3-.4-.6-.8-.9-1.1-.1-.2-.3-.3-.4-.5-.3-.4-.7-.8-1-1.1-.3-.4-.7-.7-1-1-.9-.9-1.7-1.5-2.2-1.6-5.5-1.1 27.8 47.5 30.4 53.8 2.5 6.2-.6 17 2 21.5 2 3.3 3.1 10.9 2.4 15.6 0 .2-.1.4-.1.6-.1.4-.1.7-.3 1l-.3.9c-.1.1-.1.3-.2.4-.2.2-.3.4-.5.6-.1 0-.1.1-.1.1-.3.5-.2 1.3.3 2.3.1.3.3.6.5.9.2.3.4.7.6 1 .2.2.3.5.5.7.1.1.2.3.3.4.1.2.3.4.4.6l.3.3c.2.2.3.4.5.6.2.3.4.5.6.8.3.4.7.8 1 1.2.2.2.3.4.5.6.3.3.6.7.9 1 .3.3.6.7.9 1 .7.7 1.3 1.5 2 2.1.2.3.5.5.7.8.3.3.6.6.8.9.3.3.5.6.8.8l.3.3c.1.2.3.3.4.5l1.2 1.2.2.2 1.4 1.4s-10.6 78.7-11.8 83.8c-1.1 5 11.7 22.2 12.1 22.7-.3.6-.7 1.3-1.3 2.1-.3.3-.5.7-.8 1.1-.3.4-.6.8-1 1.3-.7.9-1.6 1.8-2.5 2.9-.5.5-1 1.1-1.5 1.6-.2.3-.5.6-.8.9-1.3 1.5-2.8 3.1-4.5 4.8-1 1-2 2.1-3.1 3.2l-1.1 1.1c-.7.8-1.5 1.5-2.3 2.3-1.2 1.2-2.4 2.4-3.6 3.7-8.3 8.4-18.2 18.3-28.9 29.1-1.1 1.1-2.1 2.2-3.2 3.3l-3.3 3.3c-.5.6-1.1 1.1-1.6 1.7-1.1 1.1-2.2 2.2-3.3 3.4-1.1 1.1-2.2 2.3-3.3 3.4s-2.2 2.3-3.3 3.4c-1.7 1.7-3.4 3.5-5 5.2-1.6 1.7-3.1 3.4-4.5 5l-1.5 1.8c-.2.3-.5.6-.7.9-.5.6-.9 1.2-1.3 1.8l-.6.9c-.4.6-.8 1.2-1.2 1.7-.5.8-1 1.5-1.4 2.3-.2.3-.4.7-.6 1-.2.4-.5.8-.7 1.2-.4.7-.8 1.4-1.1 2.1-.3.7-.7 1.4-1 2-.3.7-.6 1.3-.8 2-.2.5-.4 1-.5 1.4-.2.5-.3.9-.4 1.4-1.4 4.8-1.5 8.7-.6 11.7.1.4.2.7.4 1.1.2.5.4.9.6 1.3.1.2.3.5.4.7.2.2.3.4.5.6.2.2.3.4.5.5.2.2.4.3.6.5 1.6 1.1 3.6 1.3 5.7.6.3-.1.5-.2.8-.3.9-.4 1.9-1 2.9-1.8l.9-.9c1-.9 1.9-2 2.8-3.4.3-.4.6-.9.9-1.4 1.4-2.2 2.6-4.9 3.8-8.1 7-19.8 22.2-38.6 37.7-54 3.3-3.2 6.5-6.3 9.7-9.3.4-.4.8-.7 1.2-1.1 1.6-1.4 3.2-2.8 4.7-4.2 2.3-2 4.6-4 6.7-5.8l2.1-1.8c1.7-1.5 3.4-2.8 5-4.1.9-.7 1.8-1.4 2.7-2 1.9-1.1 3.8-2 5.7-2.5.6-.2 1.3-.3 2-.5.3-.1.7-.1 1-.2.5-.1 1.1-.2 1.6-.2.8-.1 1.5-.1 2.3-.1h1.2c.4 0 .8 0 1.3.1.4 0 .8.1 1.2.1h.1c.4 0 .8.1 1.1.2.4.1.8.1 1.1.2.3 0 .5.1.8.2.3.1.5.1.8.2 1.5.3 3 .8 4.4 1.3.2.1.5.2.7.3.2.1.5.2.7.3.3.1.7.3 1.1.4.3.1.7.3 1 .4.4.1.7.3 1 .5.3.2.7.3 1 .5.3.2.7.3 1 .5.3.2.7.3 1 .5.3.2.6.3 1 .5.3.2.6.3.9.5.4.2.8.5 1.2.7 2.2 1.3 4.1 2.6 5.8 3.8l.9.6c1.6 1.1 2.8 2.1 3.7 2.8.2.1.3.3.4.4.4.3.7.6.8.7l.1.1h.1c.1.1.4.2.7.3.1 0 .1.1.2.1.1.1.3.1.4.2.1 0 .2.1.4.2.5.2 1.1.5 1.8.8l.6.3c.3.2.6.3 1 .4h.1c.8.4 1.7.8 2.7 1.2.4.2.8.3 1.3.5.3.1.6.2.8.3.3.1.7.3 1 .4 1.5.6 3.2 1.2 4.9 1.9l4.8 1.7.3-.1v-.3c1 .4 2.1.7 3.1 1 .5.2 1.1.3 1.6.5.3.1.7.2 1 .3.4.1.9.2 1.3.4.6.2 1.3.3 1.9.5h.1c1.3.3 2.7.7 4.1 1h.1c.7.1 1.3.3 1.9.4.1 0 .2 0 .2.1l1.8.3 2.1.3 2.1.3c.6.1 1.1.1 1.7.2h.1c.3 0 .7.1 1 .1.5.1 1.1.1 1.6.1.6 0 1.2.1 1.7.1h2c1.4 0 2.7-.1 4-.2 6-.5 11.7-.5 17-.3.5 0 1 .1 1.6.1 1.3.1 2.6.2 3.8.3.5 0 .9.1 1.4.1 1.5.1 2.9.3 4.2.5.4 0 .8.1 1.2.2.4.1.8.1 1.1.2.5.1.9.1 1.3.2.6.1 1.1.2 1.7.3 2.7.5 4.9.9 6.5 1.3.2 0 .4.1.6.1 1.4.3 2.2.5 2.2.5s2.3 1.6 6.1 3.8c.6.4 1.2.7 1.9 1.1 1.2.7 2.5 1.4 3.9 2.2.7.4 1.4.7 2.2 1.1.8.4 1.7.8 2.6 1.3l1.8.9c.3.1.6.3.9.4 1.6.7 3.2 1.4 4.8 2 1.7.6 3.4 1.3 5.1 1.8.3.1.7.2 1 .3 8.4 2.7 17.4 4.1 25.5 2.5 24-4.9 29.6 7.9 27.5 12.9-2.1 5 2.3 25.9-12.8 37-15 11.1-7.8 39.1-35.4 49.6-27.6 10.5-22.3 66.1-27 74.5-1.1 1.9-2.5 3.3-4.1 4.1-.4.2-.7.4-1.1.5-.2.1-.5.2-.7.3-.3.1-.5.2-.8.2-4.5 1.3-9.1 0-9.1 0s-14.6 10.1-23.1 15.6-9.3 16.9-16 20.1c-1.5.7-5.6.5-11 .2-.9-.1-1.8-.1-2.8-.2-1-.1-1.9-.1-2.9-.2-12.6-.6-28.9-.8-38.5 6.4-.3.2-.6.5-.9.7-.4.3-.7.6-1 .9l-.5.5c-2 2-3.5 4.5-4.4 7.5-.1.2-.1.4-.2.5-.7 2.3-1 4.9-.9 7.9.4 20.1-6.5 28.7-12.7 32.4-.3.2-.7.4-1 .5-4.5 2.3-8.3 2.2-8.3 2.2-14.5 8.1-19.5 15.9-28.7 32.1-.4.7-.8 1.3-1.2 2-.6 1-1.1 1.9-1.7 2.8l-.6.9c-.4.6-.8 1.1-1.1 1.7-.2.3-.4.5-.6.8l-1.2 1.5c-.4.5-.8 1-1.2 1.4-.4.5-.8.9-1.2 1.3-6.4 6.6-13.9 7.7-26 .2-5-3.1-10.3-5.2-15.8-6.6-.8-.2-1.6-.4-2.3-.6-6.2-1.4-12.5-1.9-18.4-1.9h-2.4c-.8 0-1.6 0-2.4.1-.8 0-1.5.1-2.3.1-.8 0-1.5.1-2.2.2-.7.1-1.4.1-2.1.2-.7.1-1.4.2-2 .2-.7.1-1.3.2-2 .3-.6.1-1.3.2-1.9.3-13.6 2-2.3 20.1-2.3 20.1-.5.5-1.1.9-1.6 1.3-.3.3-.7.5-1 .7-2.4 1.7-4.3 2.8-5.9 3.3-.4.2-.8.3-1.2.4-.2 0-.3.1-.5.1h-.1c-.1 0-.3 0-.4.1-2.7.4-3.5-1-3.5-1-21.1-2.4-33.7 4.8-44.1 15l-1.5 1.5c-1 1-2 2-2.9 3.1l-4.2 4.8c-.5.5-.9 1.1-1.4 1.7-.5.5-.9 1.1-1.4 1.6-2.8 3.3-5.6 6.7-8.6 9.9-17.3 18.6 3.4 31.5 2.8 33.9-.6 2.5-3 3.2-3 3.2-5.3 1.5-10 .6-13.9-1.3-.6-.3-1.3-.7-1.8-1-2.1-1.3-3.9-2.8-5.4-4.2l-1.2-1.2c-2.5-2.6-3.8-4.9-3.8-4.9l-23.1 11.1-11.6-19c-10 4.4-13.8-2.7-13.8-2.7-.7-.5-1.4-.9-2.1-1.4-.7-.5-1.4-.9-2.1-1.3-.7-.4-1.5-.8-2.2-1.2-.7-.4-1.5-.8-2.2-1.2s-1.5-.7-2.3-1.1c-.8-.4-1.5-.7-2.3-1-.8-.3-1.6-.7-2.3-1l-2.4-.9c-.8-.3-1.6-.6-2.4-.8-.8-.3-1.6-.5-2.4-.8-.8-.3-1.6-.5-2.5-.7-.8-.2-1.6-.5-2.5-.7-.8-.2-1.6-.4-2.5-.6-.8-.2-1.6-.4-2.5-.6-.8-.2-1.6-.4-2.5-.5-.8-.2-1.6-.3-2.4-.5-.8-.2-1.6-.3-2.4-.4-.8-.1-1.6-.3-2.4-.4-.4-.1-.8-.1-1.2-.2l-2.4-.3-2.4-.3c-.8-.1-1.6-.2-2.3-.3-.8-.1-1.5-.2-2.3-.2-.8-.1-1.5-.1-2.3-.2-1.8-.1-3.6-.3-5.4-.4-.7 0-1.4-.1-2.1-.1-6.3-.3-11.6-.2-15.5-.1h-1c-1.3 0-2.4.1-3.2.2h-.6c-.9.1-1.3.1-1.3.1l-22.3 2.9c-1.9.3-3.7.8-5.4 1.4-.6.2-1.1.4-1.7.6-.1 0-.2.1-.3.1-.4.2-.9.3-1.3.5-1.6.7-3 1.4-4.4 2.2-.5.3-.9.5-1.3.8-.4.3-.9.5-1.3.8h-.1c-.4.2-.7.5-1 .7-1.6 1.2-3.1 2.4-4.5 3.7l-.1.1-.1.1c-.7.6-1.3 1.2-1.9 1.8-3.6 3.5-6.6 7-9.5 9.2-.2.1-.4.3-.5.4-.1.1-.3.2-.4.3-.4.3-.9.6-1.3.8-.3.1-.5.3-.8.4-.3.1-.7.3-1.1.4l-1.2.3c-.8.2-1.7.3-2.6.5-.5.1-.9.1-1.4.2-2.2.2-4.7.2-7.1.1h-1.3c-2.2-.1-4.4-.3-6.3-.4-.4 0-.8-.1-1.2-.1-.4 0-.8-.1-1.1-.1-.4 0-.7-.1-1.1-.1-3.1-.2-5.3-.4-5.9 0-.1.1-.4.2-.7.4-.1.1-.3.1-.4.2-.2.1-.3.2-.5.3l-.6.3c-3.3 1.6-9.5 4.4-15.9 6.5-.4.1-.9.3-1.3.4-.9.3-1.7.5-2.6.8-.4.1-.9.2-1.3.3-.6.2-1.3.3-1.9.5-.4.1-.8.2-1.3.3-1.2.2-2.4.4-3.6.5-.4 0-.8.1-1.1.1-2.3.1-4.3-.1-5.8-.8-9.4-4.1-12.6.5-12.6.5-.9 2.1-1.8 4-2.8 5.8-.6 1.1-1.2 2.1-1.8 3.1-.2.3-.4.7-.6 1-.4.6-.8 1.3-1.3 1.8l-.6.9c-.4.6-.9 1.1-1.3 1.6-.9 1-1.8 2-2.8 2.8-.5.4-1 .8-1.4 1.2-4.8 3.5-10.2 4.3-16.3 1.8-12.2-5.1-14.3-26.9-14.3-26.9l-30.9-48.6c7.1-17.8.6-34-2-38.8-.1-.1-.2-.3-.2-.5-.6-1.2-1.8-3.8-3.3-7.2-.2-.5-.5-1-.7-1.6-.3-.6-.5-1.2-.8-1.8-.2-.6-.5-1.2-.8-1.8-.5-1.3-1.1-2.6-1.7-4-.3-.7-.6-1.4-.9-2-.2-.4-.3-.7-.5-1.1-1.2-2.8-2.5-5.8-3.8-8.8-.5-1.1-1-2.3-1.5-3.4-.2-.4-.3-.7-.5-1.1l-3.5 2.2c4.3 11.7 9.8 25.6 14.3 34.3 8.9 17.1 2.1 41.4 2.1 41.4l13 23.4s18.5 29.3 23.7 47.8c2.6 9.2 10.2 11.5 17.1 11.5 7 0 13.5-2.4 13.5-2.4s12.5-17.3 15-20.9c1-1.5 5.3-1.9 10-1.9 7 0 14.9.9 14.9.9S394.3 908 406 908c1.6 0 3 .2 4.3.7 2.2.9 4.6 1.2 7.2 1.2 10.2 0 21.8-5.6 21.8-5.6s25.1-16.7 33-17.7c1-.1 2.2-.2 3.5-.2 9 0 23.9 2.5 23.9 2.5s22.8-3.5 32.8-3.5c1.5 0 2.6.1 3.5.2 6.4 1.3 12.9 10.4 24.7 14.9 11.9 4.5 40.8 23 40.8 23l45.1 3.6c30-17.1 14.2-66.7 39.1-66.7h.8c24.6 0 39.7-7.7 39.7-7.7 13.3-15 28.4-18 38.3-18 6.6 0 10.9 1.3 10.9 1.3 6.3 3.7 12.6 4.9 18.4 4.9 13.4 0 23.8-6.9 23.8-6.9l85.1-71.1c89.2-37.4 96.6-84 96.6-84 33.5-63.4 85.5-113.2 116.6-139.5 15-12.5 19.7-33.8 11.4-51.8z" style={{ fill: "#2caae2" }} /></g></switch></svg>
      </div>
    </>
  )
}

export default App
