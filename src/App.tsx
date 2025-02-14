import { useState } from "react";
import Header from "./components/Header";
import "./App.css";

function App() {
  const [step, setStep] = useState(1);
  let headerTitle = "";

  switch (step) {
    case 1:
      headerTitle = "Ticket Selection";
      break;

    case 2:
      headerTitle = "Attendee Details";
      break;

    default:
      headerTitle = "Ready";
  }

  return (
    <>
      <Header />

      <main>
        <section className="my-8 p-7 md:p-5 bg-[#031e23] border border-solid border-[#166a79] w-[90%] md:w-[700px] mx-auto rounded-3xl">
          <header className="relative md:flex items-center justify-between text-white ticket-header">
            <h2 className="text-3xl">{headerTitle}</h2>
            <p className="mt-2 text-lg">Step {step}/3</p>
          </header>

          <div className="ticket-main">
            <form>
              <div
                id="select-ticket"
                className={`${step !== 1 ? "hidden" : ""}`}
              >
                <div className="border border-solid border-[#166a79] text-center rounded-[20px] text-white mt-10 p-5">
                  <h3 className="font-bold text-2xl">Techember Fest "25</h3>

                  <p className="mt-3 mb-8 md:my-3">
                    Join us for an unforgettable experience <br /> at [Event
                    name]!. Secure your spot now.
                  </p>

                  <div className="md:flex justify-center event-details">
                    <p>[Event location] </p>
                    <span className="mx-4 hidden md:block">|&nbsp;|</span>
                    <p>March 15th, 2025 | 7:00 PM</p>
                  </div>
                </div>

                <hr className="bg-[#07373f] my-7 mx-auto border-none h-1" />

                <div className="form-group">
                  <h3 className="text-white">Select Ticket Type:</h3>
                </div>

                <div className="md:grid grid-cols-2 items-center gap-5 border border-solid border-[#166a79] bg-[#052228 rounded-[20px] text-white mt-5 p-5">
                  <label htmlFor="free">
                    <input
                      type="radio"
                      name="option"
                      id="free"
                      className="absolute"
                      style={{ opacity: 0, width: 0, height: 0 }}
                      defaultChecked
                    />

                    <div className="border border-solid border-[#166a79] inline-block p-3 rounded-[20px] w-full relative">
                      <h4 className="uppercase">Regular access</h4>
                      <span className="inline-block mt-1">20 left!</span>
                      <span className="block float-right -mt-[17px] mr-[10px] bg-[#0e464f] p-1 pl-7 pr-3 rounded-lg font-semibold text-lg">
                        Free
                      </span>
                    </div>
                  </label>

                  <label htmlFor="vip">
                    <input
                      type="radio"
                      name="option"
                      id="vip"
                      className="absolute"
                      style={{ opacity: 0, width: 0, height: 0 }}
                    />

                    <div className="border border-solid border-[#166a79] inline-block p-3 rounded-[20px] w-full relative">
                      <h4 className="uppercase">Vip access</h4>
                      <span className="inline-block mt-1">20 left!</span>
                      <span className="block float-right -mt-[17px] mr-[10px] bg-[#0e464f] p-1 pl-7 pr-3 rounded-lg font-semibold text-lg">
                        $50
                      </span>
                    </div>
                  </label>

                  <label htmlFor="vvip">
                    <input
                      type="radio"
                      name="option"
                      id="vvip"
                      className="absolute"
                      style={{ opacity: 0, width: 0, height: 0 }}
                    />

                    <div className="border border-solid border-[#166a79] inline-block p-3 rounded-[20px] w-full relative">
                      <h4 className="uppercase">vvip access</h4>
                      <span className="inline-block mt-1">20 left!</span>
                      <span className="block float-right -mt-[17px] mr-[10px] bg-[#0e464f] p-1 pl-7 pr-3 rounded-lg font-semibold text-lg">
                        $150
                      </span>
                    </div>
                  </label>
                </div>

                <div>
                  <label
                    htmlFor="no-of-tickets"
                    className="inline-block mt-6 mb-3 text-white text-lg"
                  >
                    Number of Tickets
                  </label>

                  <select className="w-full p-3 border border-solid border-[#166a79] rounded-[20px] bg-transparent text-white font-bold">
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                  </select>
                </div>

                <div className="mt-6 md:flex md:gap-10 items-center bg-[#031e23] md:border md:border-solid md:border-[#166a79] rounded-[20px] md:px-14">
                  <button
                    type="button"
                    className="block bg-[#24a0b5] text-white w-full py-3 rounded-lg"
                  >
                    Next
                  </button>

                  <button className="block w-full border border-solid border-[#24a0b5] text-[#24a0b5] py-3 rounded-lg mt-4 md:mt-0">
                    Cancel
                  </button>
                </div>
              </div>
            </form>
          </div>
        </section>
      </main>
    </>
  );
}

export default App;
