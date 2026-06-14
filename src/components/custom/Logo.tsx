import animeLogo from "@/assets/anime_logo.jpg";
const Logo = () => {
  return (
    <a href="/">
      <img
        src={animeLogo}
        className="h-8 w-auto object-contain shrink-0 rounded-3xl"
      />
    </a>
  );
};

export default Logo;
