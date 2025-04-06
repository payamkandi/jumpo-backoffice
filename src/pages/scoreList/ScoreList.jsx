import PageWrapper from "@/components/layout/PageWrapper";
import Button from "@/components/ui/Button";
import InfoModal from "@/components/ui/InfoModal";
import { useScoreStore } from "@/store/scoreStore";
import ScoresTable from "./_components/ScoresTable";
import ScoresContext, { ScoresProvider } from "@/contexts/scoresContext";
import { useContext, useEffect } from "react";
import { scoreInfoMapper } from "@/utils/utils";
import { useNavigate } from "react-router";

const defaultData = [
  {
    id: 1,
    name: "آیین مدرس اول",
    nationalCode: "0116545645",
    mobileNumber: "09167151736",
    scoreDate: "1404/05/05",
    totalScore: "45,847,553",
    latestScore: "45,847,553",
    actions: "🔍",
  },
  {
    id: 2,
    name: "آیین مدرس اول",
    nationalCode: "0116545645",
    mobileNumber: "09167151736",
    scoreDate: "1404/05/05",
    totalScore: "45,847,553",
    latestScore: "45,847,553",
    actions: "🔍",
  },
  {
    id: 3,
    name: "آیین مدرس اول",
    nationalCode: "0116545645",
    mobileNumber: "09167151736",
    scoreDate: "1404/05/05",
    totalScore: "45,847,553",
    latestScore: "45,847,553",
    actions: "🔍",
  },
  {
    id: 4,
    name: "آیین مدرس اول",
    nationalCode: "0116545645",
    mobileNumber: "09167151736",
    scoreDate: "1404/05/05",
    totalScore: "45,847,553",
    latestScore: "45,847,553",
    actions: "🔍",
  },
  {
    id: 5,
    name: "آیین مدرس اول",
    nationalCode: "0116545645",
    mobileNumber: "09167151736",
    scoreDate: "1404/05/05",
    totalScore: "45,847,553",
    latestScore: "45,847,553",
    actions: "🔍",
  },
  {
    id: 6,
    name: "آیین مدرس اول",
    nationalCode: "0116545645",
    mobileNumber: "09167151736",
    scoreDate: "1404/05/05",
    totalScore: "45,847,553",
    latestScore: "45,847,553",
    actions: "🔍",
  },
  {
    id: 7,
    name: "آیین مدرس اول",
    nationalCode: "0116545645",
    mobileNumber: "09167151736",
    scoreDate: "1404/05/05",
    totalScore: "45,847,553",
    latestScore: "45,847,553",
    actions: "🔍",
  },
  {
    id: 8,
    name: "آیین مدرس اول",
    nationalCode: "0116545645",
    mobileNumber: "09167151736",
    scoreDate: "1404/05/05",
    totalScore: "45,847,553",
    latestScore: "45,847,553",
    actions: "🔍",
  },
  {
    id: 9,
    name: "آیین مدرس اول",
    nationalCode: "0116545645",
    mobileNumber: "09167151736",
    scoreDate: "1404/05/05",
    totalScore: "45,847,553",
    latestScore: "45,847,553",
    actions: "🔍",
  },
];

function ScoreList() {
  const scores = useScoreStore((store) => store.scores);
  const setScores = useScoreStore((store) => store.setScores);
  const { infoModal, setInfoModal, scoreInfo } = useContext(ScoresContext);
  const navigate = useNavigate();
  const leftNode = (
    <div>
      <Button onClick={() => navigate("add-score")}>ورود امتیاز</Button>
    </div>
  );

  useEffect(() => {
    setScores(defaultData);
  }, []);
  return (
    <>
      <InfoModal
        isOpen={infoModal}
        toggle={() => setInfoModal((prev) => !prev)}
        title="اطلاعات امتیاز"
        data={scoreInfoMapper(scoreInfo)}
      />
      <PageWrapper title="لیست امتیازات" headerLeftNodes={leftNode}>
        {scores.length === 0 ? (
          <span>هیچ امتیازی یافت نشد</span>
        ) : (
          <ScoresTable data={scores} />
        )}
      </PageWrapper>
    </>
  );
}

function ScoreListWithProvider() {
  return (
    <ScoresProvider>
      <ScoreList />
    </ScoresProvider>
  );
}

export default ScoreListWithProvider;
