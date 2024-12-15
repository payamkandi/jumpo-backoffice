import { ArrowRight } from "iconsax-react";

function PageWrapper({ children, title, withBackButton, headerLeftNodes }) {
  return (
    <div className="flex max-h-full flex-col gap-6 rounded-2xl border border-[#F2F0F9] bg-white p-6">
      <div className="flex items-center justify-between pr-6 sm:pr-0">
        <div className="flex items-center gap-4">
          {withBackButton && (
            <ArrowRight
              size={24}
              onClick={() => history.back()}
              className="cursor-pointer"
            />
          )}
          <span className="text-xl text-[#1D262B]">{title}</span>
        </div>
        {headerLeftNodes}
      </div>
      {children}
    </div>
  );
}

export default PageWrapper;
