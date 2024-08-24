"use client";

import { cn } from "@/lib/utils";
import { CheckIcon } from "lucide-react";
import { useState } from "react";

export function CheckBoxMain() {
  const [isChecked, setIsChecked] = useState(false);
  return (
    <label className="relative flex items-center cursor-pointer">
      <input
        onChange={(v) => {
          setIsChecked(!isChecked);
        }}
        type="checkbox"
        className="hidden peer"
      />
      <span
        className={cn(
          `w-6 h-6 flex items-center justify-center border border-[#BDBDBD] border-opacity-[60%] hover:border-opacity-[100%] rounded-md peer-checked:bg-[#2469F6] peer-checked:border-transparent peer-checked:text-white peer-hover:opacity-100 active:ring-[3px] active:ring-[#2469F6] active:ring-opacity-[10%] hover:opacity-100 ${isChecked && "peer-hover:bg-[#5087F8]"}`,
        )}
      >
        <CheckIcon
          className={cn(
            `text-[#E3E3E3] active:text-[#878787] text-opacity-0 hover:text-opacity-[100%] ${isChecked && "text-white text-opacity-[100%] active:text-white"}`,
          )}
        />
      </span>
    </label>
  );
}


export function CheckBoxComponent({
  checkboxLabel,
}: {
  checkboxLabel: string;
}) {
  return (
    <div
      style={{ scrollSnapAlign: "start" }}
      className=" h-[42px] px-[22px] py-[10px] items-center justify-between flex "
    >
      <p className="font-montserrat text-[14px] font-normal leading-[18.2px] text-left">
        {checkboxLabel}
      </p>
      <CheckBoxMain></CheckBoxMain>
    </div>
  );
}
