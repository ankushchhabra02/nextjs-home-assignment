"use client";

import { signIn, signOut, useSession } from "next-auth/react";

export default function GitHubSignInButton() {
  const { data: session } = useSession();

  return session ? (
    <button
      onClick={() => signOut()}
      className="bg-red-600 text-white py-2 px-4 rounded-lg hover:bg-red-700 transition"
    >
      Sign Out
    </button>
  ) : (
    <button
      onClick={() => signIn("github")}
      className="flex items-center gap-2 bg-black text-white py-2 px-4 rounded-lg hover:bg-gray-900 transition"
    >
      <svg className="w-5 h-5" viewBox="0 0 24 24" fill="white">
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M12 2C6.477 2 2 6.486 2 12.02c0 4.429 2.865 8.195 6.839 9.527.5.092.682-.218.682-.485 0-.238-.009-.868-.014-1.704-2.782.605-3.369-1.342-3.369-1.342-.454-1.153-1.11-1.462-1.11-1.462-.908-.62.069-.608.069-.608 1.004.071 1.532 1.032 1.532 1.032.892 1.529 2.341 1.088 2.91.832.091-.647.35-1.087.637-1.337-2.22-.253-4.555-1.111-4.555-4.942 0-1.091.39-1.985 1.029-2.682-.103-.253-.446-1.273.098-2.654 0 0 .84-.269 2.75 1.025A9.562 9.562 0 0 1 12 6.844c.85.004 1.706.114 2.503.335 1.909-1.294 2.748-1.025 2.748-1.025.545 1.381.202 2.401.1 2.654.641.697 1.028 1.591 1.028 2.682 0 3.84-2.339 4.687-4.566 4.935.359.31.678.921.678 1.857 0 1.34-.012 2.419-.012 2.747 0 .269.18.579.688.481C19.135 20.212 22 16.447 22 12.02 22 6.486 17.523 2 12 2Z"
        />
      </svg>
      Sign in with GitHub
    </button>
  );
}
