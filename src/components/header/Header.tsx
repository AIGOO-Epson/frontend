import RenderHeader from "./RenderHeader";

function Header() {
  return (
    <header className="flex items-end w-[343px] h-[98px] bg-background py-2 sticky top-0">
      <RenderHeader />
    </header>
  );
}

export default Header;