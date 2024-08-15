import Button from "./../../../components/shared/Button/Button";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
interface PaginationComponentProps {
  currentPage: number;
  totalPages: number;
  prevButtonHandler: () => void;
  nextButtonHandler: () => void;
}
const PaginationComponent = ({
  currentPage,
  totalPages,
  prevButtonHandler,
  nextButtonHandler,
}: PaginationComponentProps) => {
  return (
    <div className="flex justify-end px-4 pt-8">
      <div className="flex items-center gap-4">
        <p className="font-semibold">
          Page {currentPage} of {totalPages}
        </p>
        <div className="flex items-center gap-2">
          <Button clickHandler={prevButtonHandler} isDisabled={currentPage < 2}>
            <IoIosArrowBack className="my-1" />
          </Button>
          <Button
            clickHandler={nextButtonHandler}
            isDisabled={currentPage >= totalPages}
          >
            <IoIosArrowForward className="my-1" />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default PaginationComponent;
