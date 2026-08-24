"use client";

import { removePetition } from "./actions";

export default function DeleteButton({
  id,
  name,
}: {
  id: number;
  name: string;
}) {
  return (
    <form
      action={removePetition}
      onSubmit={(e) => {
        if (!confirm(`確定要刪除「${name}」這筆陳情嗎？此動作無法復原。`)) {
          e.preventDefault();
        }
      }}
    >
      <input type="hidden" name="id" value={id} />
      <button
        type="submit"
        className="rounded-sm border border-wine/40 px-3 py-1.5 text-xs text-wine transition-colors hover:border-wine hover:bg-wine hover:text-paper-alt"
      >
        刪除
      </button>
    </form>
  );
}
