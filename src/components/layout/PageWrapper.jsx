import { ArrowRight } from "iconsax-react";

function PageWrapper({ children, title, withBackButton, headerLeftNodes }) {
  return (
    <div className="flex max-h-full flex-col gap-3 rounded-3xl border border-[#E5E7EB] bg-white p-3 sm:gap-6 sm:p-6">
      <div className="flex items-center justify-between">
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
