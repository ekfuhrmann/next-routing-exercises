import React from "react";

import ScreenSaver from "../../../../components/ScreenSaver";

function ScreenSaverExercise({ params }) {
  return (
    <main className="screen-saver-wrapper">
      <ScreenSaver color={params.color || "red"} />
    </main>
  );
}

export default ScreenSaverExercise;
