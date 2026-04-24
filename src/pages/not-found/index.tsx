import { WV_LOGO } from "@config/assets";
import { Link } from "react-router-dom";

export default function NotFoundPage() {
  return (
    <div className="text-secondary bg-primary flex min-h-screen flex-col items-center justify-center gap-4 dark:bg-black dark:text-white">
      <img
        src={WV_LOGO}
        alt="WVLogo"
        className="bg-primary h-10 w-10 rounded-full object-cover p-1 dark:bg-white"
      />
      <h1 className="text-4xl font-bold">404</h1>
      <p className="text-muted-foreground">Page not found</p>
      <Link to="/" className="text-blue-500 underline">
        Go back home
      </Link>
    </div>
  );
}
