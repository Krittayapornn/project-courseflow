import arrow_drop from "../../icons/coursedetail/arrow_drop.png";
import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  Box,
} from "@chakra-ui/react";

function StickybarConfirmation() {
  return (
    <div>
      <footer className="bg-white flex items-center justify-center border-solid border-2 border-blue-700 shadow-md h-fit sticky bottom-0 xl:hidden">
        <div className="flex flex-col justify-center items-center w-[100%] sm:w-[375px] h-[80%] p-[8px] ">
          <div className="sm:w-[343px] flex flex-col justify-between gap-3">
            <div>
              <Accordion defaultIndex={[0]} allowMultiple>
                <AccordionItem>
                  <h2>
                    <AccordionButton>
                      <Box as="span" flex="1" textAlign="left">
                        <span className="text-black text-Body2 font-Body2">
                          Service Design Essentials
                        </span>
                      </Box>
                      <div>
                        <img
                          className="w-[24px] h-[24px]"
                          src={arrow_drop}
                        ></img>
                      </div>
                    </AccordionButton>
                  </h2>
                  <AccordionPanel pb={4}>
                    Lorem ipsum dolor sit amet, conse ctetur adipiscing elit
                  </AccordionPanel>
                </AccordionItem>
              </Accordion>
            </div>
            <div className="text-Gray-700 text-Body2 font-Body2">
              THB 3,559.00
            </div>
            <div className="flex flex-row">
              <button className="border-solid border-[1px] border-Blue-500 bg-Blue-500 rounded-[12px] p-[8px] text-[12px] font-[700] text-white text-center sm:w-[343px] sm:h-[34px]">
                Start Learning
              </button>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default StickybarConfirmation;