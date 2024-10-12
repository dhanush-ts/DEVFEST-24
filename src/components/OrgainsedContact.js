import a from "../assets/a.jpeg"
import b from "../assets/b.jpeg"
import bh from "../assets/bhaskar.jpeg"
import de from "../assets/devslogo.png"
import rec from "../assets/rec-logo.png"
import tec from "../assets/tec-logo-white.png"
import iic from "../assets/iic-logo.png"


export const OrgainsedContact = () => {
    return (
      <div className="bg-black text-white pt-10">
        <h3 className="text-5xl font-bold text-center">Organized By</h3>
        <div className="md:flex justify-center">
          <img src={de} alt="Institution's Innovation Council" className="mx-auto max-w-xs" />
          <img src={rec} alt="Institution's Innovation Council" className="max-h-28 m-auto" />
          <img src={iic} alt="Talent Enhancement Cell" className="max-w-sm max-h-60 m-auto" />
          <img src={tec} alt="DevsREC" className="max-h-48 m-auto" />
        </div>
        <h3 className="text-5xl my-12 text-center">Club Coordinators</h3>
        <div className="md:flex text-sm font-light justify-center">
          <div className="text-center mx-auto">
            <img src={a} alt="Dr P Revathy" className="rounded-lg h-72 w-72 md:h-96 md:w-96 mx-auto mb-2 overflow-hidden" />
            <p className="pb-8 text-xl">Dr P Revathy <br />HoD, CSD</p>
          </div>
          <div className="text-center mx-auto">
            <img src={b} alt="Ms. Sorna Shanthi" className="rounded-lg md:h-96 md:w-96 overflow-hidden h-72 w-72 mx-auto mb-2" />
            <p className="pb-8 text-xl">Ms. Sorna Shanthi <br />AOP, CSE</p>
          </div>
          <div className="text-center mx-auto">
            <img src={bh} alt="Dr. K. Bhaskar" className="rounded-lg md:h-96 md:w-96 overflow-hidden h-72 w-72 mx-auto mb-2" />
            <p className="pb-8 text-xl">Dr. K. Bhaskar <br />HOD, AUTOMOBILE</p>
          </div>
        </div>
      </div>
    );
  };