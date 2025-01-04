export default function TabButton({ name, clickedButton, setClickedButton }: { name: string, clickedButton: string, setClickedButton: Function }) {
  const isActive = clickedButton === name;
  let backgroundColor = ""

  switch (name) {
    case "production":
      backgroundColor = 'bg-[#ffe3e3]'
      break;
    case "translation":
      backgroundColor = 'bg-[#d0ebff]'
      break;
    case "statistics":
      backgroundColor = 'bg-[#c3fae8]'
      break;
  }

  let inactivestyle = ``
  let activeStyle = `${backgroundColor}`;
  let appliedStyle = isActive ? activeStyle : inactivestyle;

  return (
    <button
      className={`text-xl border-[2px] p-3 rounded ml-4 border-solid border-gray-500 ${appliedStyle}`}
      onClick={() => setClickedButton(name)}
    >
      {name}
    </button>
  );
}
