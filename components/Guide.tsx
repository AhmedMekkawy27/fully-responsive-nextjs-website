import Image from "next/image";

const Guide = () => {
    return (
        <section className={`flex justify-start flex-col lg:max-container pb-10 lg:pb-20`}>
            <div className={`flex-col xl:flexBetween xl:flex-row flex justify-start mb-24 items-start px-6 lg:padding-container`}>
                <div className={`flex flex-col justify-start items-start relative z-20 mb-5 xl:w-[390px]`}>
                    <Image src="/camp.svg" alt="camp"  width={50} height={50}/>
                    <p className={`regular-18 mb-4 text-green-50`}>WE ARE HERE FOR YOU</p>
                    <h2 className={`bold-40 lg:bold-64`}>Guide You to Easy Path</h2>
                </div>
                <div className={`flex xl:w-[520px]`}>
                    <p className={`regular-16 text-gray-30`}>Only with the hilink application you will no longer get lost and get lost again,
                        because we already support offline maps when there is no internet connection in the field.
                        Invite your friends, relatives and friends to have fun in the wilderness through the valley
                        and reach the top of the mountain</p>
                </div>
            </div>
            <div className={`flexCenter relative`}>
                <Image src="/boat.png" alt="boat" width={1440} height={580} className={`2xl:rounded-5xl relative`}/>
                <div className={`rounded-2xl bg-white pl-5 pr-7 py-8
                 absolute flexBetween gap-3 border shadow-md md:left-[5%] lg:top-20`}>
                    <Image src="meter.svg" alt="meter" width={26} height={158}/>
                    <div className={`flex flex-col justify-start items-start`}>
                        <div className={`flexBetween w-full`}>
                            <p className={`regular-16 text-gray-20`}>Destination</p>
                            <p className={`bold-18 text-green-50`}>48 min</p>
                        </div>
                        <div className={`flex justify-start items-start mb-14`}>
                        <h3 className={`bold-20`}>Aguas Calientes</h3>
                        </div>
                        <div>
                            <p className={`regular-16 text-gray-20`}>Start Track</p>
                            <h3 className={`bold-20`}>Wonorejo Pasuruan</h3>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Guide;