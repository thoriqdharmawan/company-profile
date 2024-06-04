import { Button } from "../ui/button";

export default function Navbar() {
  return (
    <div className="w-full m-auto max-w-screen-lg flex justify-between items-center py-4">
      <h2 className="font-extrabold text-xl">META Vision</h2>
      <div className="flex gap-6">
        <p className="cursor-pointer">Solution</p>
        <p className="cursor-pointer">Digital Adoption</p>
        <p className="cursor-pointer">About Us</p>
      </div>

      <Button size="sm">Login</Button>
    </div>
  );
}
