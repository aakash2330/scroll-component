import { ButtonMain } from "@/components/button/buttonMain";
import { CheckBoxComponent } from "@/components/checkbox/checkboxMain";
import { Seperator } from "@/components/seperator/separator";

export default function Page() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center ">
      <div className="flex flex-col justify-between h-[326px] py-[10px] px-0 gap-0 rounded-tl-[6px] border border-[#EEEEEE] border-l-0 border-b-0 border-r-0 shadow-[0px_8px_15px_0px_#1414141F,0px_0px_4px_0px_#1414141A]">
        <CheckBoxComponent checkboxLabel="All pages"></CheckBoxComponent>
        <Seperator />
        <div
          style={{ scrollSnapType: "y" }}
          className="snap-mandatory h-[164px] no-scrollbar overflow-y-auto gap-0 "
        >
          {new Array(6).fill(null).map((_, index) => {
            return (
              <CheckBoxComponent
                key={index}
                checkboxLabel={`Page ${index + 1}`}
              ></CheckBoxComponent>
            );
          })}
        </div>
        <Seperator />
        <ButtonMain></ButtonMain>
      </div>
    </main>
  );
}
