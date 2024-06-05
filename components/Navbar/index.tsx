import { Button } from "../ui/button";

export default function Navbar() {
  return (
    <div className="m-auto flex w-full max-w-screen-lg items-center justify-between py-4">
      <h2 className="text-xl font-extrabold">META Vision</h2>
      <div className="flex gap-6">
        <p className="cursor-pointer">About Us</p>
        <p className="cursor-pointer">Products</p>
      </div>

      <Button size="sm">Login</Button>
    </div>
  );
}
