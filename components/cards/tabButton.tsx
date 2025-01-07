export default function TabButton({
  name,
  clickedButton,
  setClickedButton,
}: {
  name: string;
  clickedButton: string;
  setClickedButton: Function;
}) {
  const isActive = clickedButton === name;

  let activeBackgroundColor = "";
  let hoverBackgroundColor = "";

  // Define active and hover styles based on the name
  switch (name) {
    case "production":
      activeBackgroundColor = "bg-[#ffe3e3]";
      hoverBackgroundColor = "hover:bg-[#ffe3e3]";
      break;
    case "translation":
      activeBackgroundColor = "bg-[#d0ebff]";
      hoverBackgroundColor = "hover:bg-[#d0ebff]";
      break;
    case "statistics":
      activeBackgroundColor = "bg-[#c3fae8]";
      hoverBackgroundColor = "hover:bg-[#c3fae8]";
      break;
  }

  const appliedStyle = isActive ? activeBackgroundColor : "";

  return (
    <button
      className={`text-xl border-[2px] p-3 rounded ml-4 border-solid border-black ${appliedStyle} ${hoverBackgroundColor} transition duration-300`}
      onClick={() => setClickedButton(name)}
    >
      {name}
    </button>
  );
}
