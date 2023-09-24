export const QRComponent = () => {
    return (
        <div className="qr-container flex justify-center w-full h-[100vh] items-center bg-[#D5E1EF]">
            <div className="qr-content w-[320px] h-[497px] rounded-[20px] bg-white justify-center items-center">
                <div className="qr-top flex w-[288px] h-[288px] bg-[#2C7DFA] rounded-[10px] m-4 justify-center items-center">
                    <img src="./images/image-qr-code.png" alt="qr" className="w-[288px] h-[288px] rounded-[10px]"/>
                </div>
                <div className="qr-btm flex flex-col">
                    <p className="qr-heading font-bold text-[22px] text-center text-[#1F314F] mx-4">Improve your front-end skills by building projects</p>
                    <p className="qr-para text-[15px] font-normal text-center tracking-[0.188px] text-[#7D889E] leading-normal mt-4 mx-8">Scan the QR code to visit Frontend Mentor and take your coding skills to the next level</p>
                </div>
            </div>
        </div>
    )
}