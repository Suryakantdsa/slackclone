import React from "react";
import { X, MoveRight } from "lucide-react";

const HeroAction = () => {
  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-6 hidden sm:block">
      <div className="flex w-full justify-between items-center bg-secondary-500 text-white font-semibold p-4 sm:p-6 rounded-full">
        <p className="flex flex-col sm:flex-row items-center gap-2 sm:gap-4 text-sm sm:text-base lg:text-lg">
          <span className="text-center sm:text-left">
            Slack is your digital HQ. Meet the new features keeping teams
            connected in a work-from-anywhere world.
          </span>
          <span className="flex items-center gap-1 border-b-2 cursor-pointer hover:opacity-80">
            <span>Let's go</span>
            <MoveRight className="w-4 h-4 sm:w-5 sm:h-5" />
          </span>
        </p>

        <button className="p-1 sm:p-2 hover:bg-secondary-600 rounded-full transition-colors">
          <X className="w-5 h-5 sm:w-6 sm:h-6" />
        </button>
      </div>
    </div>
  );
};

export default HeroAction;
