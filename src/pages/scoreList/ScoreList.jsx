import PageWrapper from "@/components/layout/PageWrapper";
import Button from "@/components/ui/button/Button";

function ScoreList() {
  const leftNode = (
    <div>
      <Button>ورود امتیاز</Button>
    </div>
  );
  return (
    <PageWrapper title="لیست امتیازات" headerLeftNodes={leftNode}></PageWrapper>
  );
}

export default ScoreList;
