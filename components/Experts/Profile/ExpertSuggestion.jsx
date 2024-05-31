import { useState } from "react";
import ExpertsButton from "@components/Buttons/ExpertsButton";
import Image from "next/image";
import { leaf } from "@public";

export const ExpertSuggestion = ({ fortes, suggestions }) => {
  const [active, setActive] = useState(true);

  let allFortes = fortes.slice(2, -2).split("', '");
  let allSuggestions = suggestions.slice(2, -2).split("', '");

  return (
    <section className="bg-primary-two">
      <div className="container mx-auto pb-8">
        <div className="grid grid-cols-2">
          <ExpertsButton
            text="Main Forte"
            isActive={active}
            switchTo={() => setActive(true)}
          />
          <ExpertsButton
            text="Suggestions"
            isActive={!active}
            switchTo={() => setActive(false)}
          />
        </div>

        {/* Content for the active tab */}
        <div className="bg-yellow-primary px-2 py-4 lg:px-6">
          {active && (
            <div className="flex lg:items-center lg:py-4">
              <div className="para">
                <ul>
                  {allFortes.map((value, i) => {
                    return (
                      <li key={i} className="flex space-x-2">
                        <div className="">
                          <Image
                            src={leaf}
                            alt="Leaf Icon"
                            className="mr-6 h-6 w-6 object-contain"
                          />
                        </div>
                        <div>
                          <p className="mb-3 text-black">{value}</p>
                        </div>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </div>
          )}

          {!active && (
            <div className="flex lg:items-center lg:py-4">
              <div className="para">
                <ul>
                  {allSuggestions.map((value, i) => {
                    return (
                      <li className="flex space-x-2" key={i}>
                        <div>
                          <Image
                            src={leaf}
                            alt="Leaf Icon"
                            className="mr-6 h-6 w-6 object-contain"
                          />
                        </div>
                        <div>
                          <p className="mb-2 text-black">{value}</p>
                        </div>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};
