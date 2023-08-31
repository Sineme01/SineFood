import offlineImg from "../assets/img/offline.png"
const offline = () => {
    return (
        <div className="mx-80 my-20">
            <h1 className="text-5xl font-bold">🔴 Seems you are offline.</h1>
            <h1 className="my-5 text-xl font-semibold pl-20">Please check your internet Connection.</h1>
            {/* <img src={offlineImg}></img> */}
        </div>
    );
}

export default offline;