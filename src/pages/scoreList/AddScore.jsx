import PageWrapper from "@/components/layout/PageWrapper";
import TabsDynamic from "@/components/ui/tabsDaynamic/TabsDaynamic";
import { useState } from "react";
import NewUserScoreForm from "./_components/NewUserScoreForm";
import OldUserScoreForm from "./_components/OldUserScoreForm";

function AddScore() {
  const [tab, setTab] = useState("old");

  const tabs = [
    {
      name: "مشتری قدیمی",
      id: "1",
      click: () => {
        setTab("old");
      },
    },
    {
      name: "مشتری جدید",
      id: "2",
      click: () => {
        setTab("new");
      },
    },
  ];

  return (
    <PageWrapper title="ورود امتیاز" withBackButton>
      <TabsDynamic data={tabs} />
      {tab === "new" && <NewUserScoreForm />}
      {tab === "old" && <OldUserScoreForm />}
    </PageWrapper>
  );
}

export default AddScore;
