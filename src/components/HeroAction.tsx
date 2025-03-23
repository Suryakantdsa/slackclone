import React from "react";
import { X, MoveRight } from "lucide-react";

const HeroAction = () => {
  return (
    <div className="container">
      <div className="flex w-full justify-between items-center bg-secondary-500 text-white font-semibold p-6 rounded-full">
        <p className="flex items-center gap-1 text-primary-100">
          <span>
            Slack is your digital HQ. Meet the new features keeping teams
            connected in a work-from-anywhere world.
          </span>
          <span className=" border-b-2 cursor-pointer">Let's go</span>
          <span className="cursor-pointer">
            <MoveRight />
          </span>
        </p>
        <button>
          <X />
        </button>
      </div>
    </div>
  );
};

export default HeroAction;
