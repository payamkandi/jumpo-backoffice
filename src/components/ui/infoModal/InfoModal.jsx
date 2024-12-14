import { CloseSquare } from "iconsax-react";
import Modal from "../modal/Modal";

function InfoModal({ data, title, isOpen, toggle }) {
  if (!data) return null;
  const mappedData = Object.entries(data).map(([key, value]) => ({
    title: key,
    value,
  }));
  return (
    <Modal modal={isOpen} toggle={toggle}>
      <div className="flex flex-col gap-6 p-6">
        <div className="flex justify-between">
          {title && <span className="text-lg font-semibold">{title}</span>}
          <CloseSquare size={24} onClick={toggle} className="cursor-pointer" />
        </div>
        <div className="grid grid-cols-2 gap-x-8 gap-y-4 rounded-2xl bg-[#F2F0F9] px-6 py-4">
          {mappedData &&
            mappedData.map((item, index) => (
              <div key={index}>
                <span className="text-sm font-normal text-[#415762]">
                  <bdi>{item.title}</bdi>
                </span>

                <span className="font-base text-sm text-[#1D262B]">
                  {" : " + item.value}
                </span>
              </div>
            ))}
        </div>
      </div>
    </Modal>
  );
}

export default InfoModal;
