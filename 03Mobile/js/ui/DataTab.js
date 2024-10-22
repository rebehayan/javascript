export const DataTab = () => {
  const depth1Data = ["탭1", "탭2", "탭3", "탭4", "탭5"];
  const depth2Data = [
    ["탭2-1", "탭2-1", "탭2-1"],
    ["탭2-2", "탭2-2", "탭2-2"],
    ["탭2-3", "탭2-3", "탭2-3"],
    ["탭2-4", "탭2-4", "탭2-4"],
    ["탭2-5", "탭2-5", "탭2-5"],
  ];
  const depth3Data = [
    ["탭2-1-1", "탭2-1-1", "탭2-1-1"],
    ["탭2-2-2", "탭2-2-2", "탭2-2-2"],
    ["탭2-3-3", "탭2-3-3", "탭2-3-3"],
  ];

  const renderButton = (data) => data.map((item) => `<li><button>${item}</button></li>`).join("");

  const depth1 = document.querySelector(".depth1");
  const depth2 = document.querySelector(".depth2");
  const depth3 = document.querySelector(".depth3");

  depth1.innerHTML = renderButton(depth1Data);
  //   depth2.innerHTML = renderButton(depth2Data);
  //   depth3.innerHTML = renderButton(depth3Data);

  const depth3Bind = () => {
    const tabButtons2 = document.querySelectorAll(".depth2 li");

    tabButtons2.forEach((tabButton, index) => {
      tabButton.addEventListener("click", (e) => {
        depth3.innerHTML = renderButton(depth3Data[index]);
      });
    });
  };

  const tabButtons = document.querySelectorAll(".depth1 li");

  tabButtons.forEach((tabButton, index) => {
    tabButton.addEventListener("click", (e) => {
      depth2.innerHTML = renderButton(depth2Data[index]);
      depth3Bind();
    });
  });
};
