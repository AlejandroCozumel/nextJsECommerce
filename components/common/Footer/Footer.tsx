import { FC } from "react";

export const Footer: FC = () => {
  return (
    <footer className="bg-secondary pt-1">
      <div className="container mx-auto px-6">
        <div className="mt-5 flex flex-col items-center">
          <div className="py-6">
            <p className="mb-6 text-sm text-secondary font-bold">
                © {new Date().getFullYear()} Hackademy
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer