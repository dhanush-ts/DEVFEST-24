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
        <div className="flex justify-center">
          <img src={de} alt="Institution's Innovation Council" className="max-w-xs" />
          <img src={rec} alt="Institution's Innovation Council" className="max-h-28 my-auto" />
          <img src={iic} alt="Talent Enhancement Cell" className="max-w-sm max-h-60 my-auto" />
          <img src={tec} alt="DevsREC" className="max-h-48 my-auto" />
        </div>
        <h3 className="text-5xl mb-12 text-center">Club Coordinators</h3>
        <div className="flex text-sm font-light justify-center">
          <div className="text-center mx-4">
            <img src={a} alt="Dr P Revathy" className="rounded h-64 w-64 mx-auto mb-2 overflow-hidden" />
            <p>Dr P Revathy</p>
          </div>
          <div className="text-center mx-4">
            <img src={b} alt="Ms. Sorna Shanthi" className="rounded overflow-hidden h-64 w-64 mx-auto mb-2" />
            <p>Ms. Sorna Shanthi</p>
          </div>
          <div className="text-center mx-4">
            <img src={bh} alt="Dr. K. Bhaskar" className="rounded overflow-hidden h-64 w-64 mx-auto mb-2" />
            <p>Dr. K. Bhaskar</p>
          </div>
        </div>
      </div>
    );
  };